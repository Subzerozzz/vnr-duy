// =====================================================================
//  CẤU HÌNH — chỉ cần sửa file này
// =====================================================================
//  1) Dán cấu hình Firebase của bạn vào "firebase" (xem README.md).
//     Nếu để trống, trang chạy ở CHẾ ĐỘ THỬ: điểm chỉ đồng bộ giữa các
//     tab trong CÙNG một trình duyệt (dùng để test, không dùng khi thi).
//  2) Đổi ADMIN_PIN thành mã riêng của nhóm bạn.
// =====================================================================
export default {
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",        // BẮT BUỘC, dạng https://xxx-default-rtdb.asia-southeast1.firebasedatabase.app
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // Mã PIN để vào trang /admin. Để "" nếu không cần.
  // Lưu ý: đây chỉ là lớp chặn nhẹ cho người chơi, không phải bảo mật thật.
  ADMIN_PIN: "vnr2026",

  // Thư mục lưu dữ liệu trong database. Đổi tên (vd "vnr/lop-2") nếu muốn
  // tổ chức nhiều lượt chơi tách biệt.
  DB_PATH: "vnr/teams"
};
