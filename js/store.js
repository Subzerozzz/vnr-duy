// Lớp lưu trữ dùng chung cho trang chơi và trang admin.
// - Có cấu hình Firebase  -> Firebase Realtime Database (realtime giữa mọi máy)
// - Không có cấu hình     -> localStorage (chế độ thử, chỉ trong 1 trình duyệt)
import CONFIG from "./config.js";

const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
const TIMEOUT = 10000;

const withTimeout = (p, ms = TIMEOUT) => Promise.race([
  p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))
]);

export async function createStore() {
  const cfg = CONFIG.firebase || {};
  return cfg.databaseURL && cfg.apiKey ? firebaseStore(cfg, CONFIG.DB_PATH) : localStore();
}

/* ------------------------------------------------------------------ */
async function firebaseStore(cfg, path) {
  const [{ initializeApp }, D] = await Promise.all([
    import(FB + "firebase-app.js"),
    import(FB + "firebase-database.js")
  ]);
  const app = initializeApp(cfg);
  const db = D.getDatabase(app);
  const teamsRef = D.ref(db, path);
  const teamRef = id => D.ref(db, `${path}/${id}`);
  let offset = 0;
  D.onValue(D.ref(db, ".info/serverTimeOffset"), s => { offset = s.val() || 0; });

  return {
    mode: "firebase",
    ts: () => D.serverTimestamp(),
    now: () => Date.now() + offset,
    onConnection(cb) {
      return D.onValue(D.ref(db, ".info/connected"), s => cb(!!s.val()));
    },
    async findTeamByName(nameKey) {
      const snap = await withTimeout(D.get(D.query(teamsRef, D.orderByChild("nameKey"), D.equalTo(nameKey))));
      let found = null;
      snap.forEach(c => { if (!found) found = { id: c.key, data: c.val() }; });
      return found;
    },
    createTeam: (id, data) => withTimeout(D.set(teamRef(id), data)),
    updateTeam: (id, patch) => D.update(teamRef(id), patch),
    watchTeam(id, cb) { return D.onValue(teamRef(id), s => cb(s.val())); },
    watchTeams(cb, onError) { return D.onValue(teamsRef, s => cb(s.val() || {}), onError); },
    removeTeam: id => D.remove(teamRef(id)),
    removeAll: () => D.remove(teamsRef),
    // Báo "online" khi đang mở trang, tự chuyển "offline" khi đóng tab / mất mạng
    presence(id) {
      const onlineRef = D.ref(db, `${path}/${id}/online`);
      return D.onValue(D.ref(db, ".info/connected"), s => {
        if (!s.val()) return;
        D.onDisconnect(onlineRef).set(false).catch(() => {});
        D.set(onlineRef, true).catch(() => {});
      });
    }
  };
}

/* ------------------------------------------------------------------ */
function localStore() {
  const KEY = "vnr-local-db";
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const subs = new Set();
  const emit = () => { const t = read(); subs.forEach(f => f(t)); };
  const write = t => { localStorage.setItem(KEY, JSON.stringify(t)); emit(); };
  addEventListener("storage", e => { if (e.key === KEY) emit(); });
  const sub = f => { subs.add(f); f(read()); return () => subs.delete(f); };

  return {
    mode: "local",
    ts: () => Date.now(),
    now: () => Date.now(),
    onConnection(cb) { cb(true); return () => {}; },
    async findTeamByName(nameKey) {
      const e = Object.entries(read()).find(([, t]) => t.nameKey === nameKey);
      return e ? { id: e[0], data: e[1] } : null;
    },
    async createTeam(id, data) { const t = read(); t[id] = data; write(t); },
    async updateTeam(id, patch) { const t = read(); if (!t[id]) return; Object.assign(t[id], patch); write(t); },
    watchTeam(id, cb) { return sub(t => cb(t[id] || null)); },
    watchTeams(cb) { return sub(cb); },
    async removeTeam(id) { const t = read(); delete t[id]; write(t); },
    async removeAll() { write({}); },
    presence(id) {
      const set = v => { const t = read(); if (t[id]) { t[id].online = v; write(t); } };
      set(true);
      addEventListener("pagehide", () => set(false));
      addEventListener("pageshow", () => set(true));
      return () => {};
    }
  };
}
