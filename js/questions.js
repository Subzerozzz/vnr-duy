// Dữ liệu 4 phòng / 20 câu hỏi (giữ nguyên từ bản gốc).
// Mỗi câu: [câu hỏi, [A, B, C, D], chỉ số đáp án đúng (0-3), giải thích]
export const ROOMS = [
 {lv:"Cấp độ 1 · Nhận biết",name:"Phòng Cột mốc",pts:10,
  desc:"Ba năm đánh dấu những bước ngoặt của dân tộc.",
  plaque:{t:"Hiện vật: ba cột mốc",l:["1945: Việt Nam giành được chính quyền","1975: thống nhất đất nước","1986: Đảng khởi xướng và lãnh đạo công cuộc đổi mới toàn diện"]},
  qs:[
  ["Theo nội dung bài học, Việt Nam giành được chính quyền vào năm nào?",["1930","1945","1954","1975"],1,"Tài liệu nêu Việt Nam giành được chính quyền năm 1945."],
  ["Mốc thời gian nào gắn với thắng lợi thống nhất đất nước?",["1945","1954","1975","1986"],2,"Năm 1975 là mốc thống nhất đất nước."],
  ["Bài học lịch sử thứ nhất là gì?",["Kết hợp sức mạnh dân tộc với sức mạnh thời đại","Kiên định độc lập dân tộc gắn liền với chủ nghĩa xã hội","Tăng cường đoàn kết","Phát triển kinh tế số"],1,"Đây là bài học thứ nhất trong năm bài học lớn."],
  ["Bài học nào nhấn mạnh vai trò trung tâm của nhân dân?",["Sự nghiệp cách mạng là của nhân dân, do nhân dân và vì nhân dân","Kết hợp sức mạnh dân tộc với sức mạnh thời đại","Đẩy mạnh hội nhập","Nâng cao năng lực công nghệ"],0,"Bài học thứ hai khẳng định vai trò của nhân dân."],
  ["Đảng khởi xướng và lãnh đạo công cuộc đổi mới toàn diện đất nước từ năm nào?",["1975","1980","1986","1995"],2,"Tài liệu nêu mốc năm 1986."]
 ]},
 {lv:"Cấp độ 2 · Thông hiểu",name:"Phòng Nội lực và thời đại",pts:20,
  desc:"Hiểu các khái niệm then chốt và lý do vì sao chúng đi cùng nhau.",
  plaque:{t:"Hiện vật: hai nguồn sức mạnh",l:["Nội lực: con người, lòng yêu nước, đoàn kết, văn hóa, tiềm lực kinh tế – xã hội","Sức mạnh thời đại: khoa học – công nghệ, hợp tác quốc tế, tri thức, sự ủng hộ quốc tế"]},
  qs:[
  ["Hành động nào thể hiện bài học củng cố, tăng cường đoàn kết?",["Chỉ coi trọng thành tích cá nhân","Hợp tác, tôn trọng khác biệt và phát huy sức mạnh tập thể","Tránh trao đổi","Làm việc tách biệt"],1,"Đoàn kết được thể hiện qua hợp tác và sức mạnh tập thể."],
  ["“Nội lực” theo tài liệu được hiểu là gì?",["Chỉ vốn đầu tư nước ngoài","Nguồn lực bên trong đất nước như con người, lòng yêu nước, đoàn kết, văn hóa và tiềm lực kinh tế – xã hội","Chỉ viện trợ quốc tế","Chỉ công nghệ nước ngoài"],1,"Đó là các nguồn lực hình thành từ bên trong đất nước."],
  ["Yếu tố nào thuộc “sức mạnh thời đại”?",["Thành tựu khoa học – công nghệ, hợp tác quốc tế, tri thức và sự ủng hộ quốc tế","Chỉ truyền thống văn hóa","Chỉ nhân lực trong nước","Chỉ tài nguyên thiên nhiên"],0,"Đây là các điều kiện và nguồn lực từ bên ngoài."],
  ["Vì sao tranh thủ nguồn lực bên ngoài không đồng nghĩa với phụ thuộc?",["Không cần hợp tác quốc tế","Nội lực vẫn là nền tảng; ngoại lực được tiếp nhận chủ động, có chọn lọc và hiệu quả","Ngoại lực không cần thiết","Hội nhập phải tách rời lợi ích quốc gia"],1,"Tài liệu nhấn mạnh nội lực là nền tảng, ngoại lực cần được sử dụng có chọn lọc."],
  ["Nghiên cứu lịch sử có ý nghĩa nào được nêu trong tài liệu?",["Chỉ ghi nhớ niên đại","Chỉ nhìn lại quá khứ","Nhận thức, tổng kết kinh nghiệm và vận dụng bài học để giải quyết vấn đề mới","Thay thế tìm hiểu thực tiễn"],2,"Ba ý nghĩa chính là nhận thức, tổng kết và vận dụng."],
  ["Định hướng hội nhập nào phù hợp với bài học?",["Hội nhập sâu rộng nhưng giữ vững độc lập, tự chủ và lợi ích quốc gia – dân tộc","Phụ thuộc hoàn toàn vào công nghệ bên ngoài","Hạn chế mọi hợp tác","Tiếp thu mọi yếu tố không chọn lọc"],0,"Đây là yêu cầu được nhấn mạnh trong tài liệu."]
 ]},
 {lv:"Cấp độ 3 · Vận dụng",name:"Phòng Tình huống",pts:30,
  desc:"Gặp một tình huống, tìm bài học lịch sử phù hợp để xử lý.",
  plaque:{t:"Cách chơi",l:["Đọc tình huống, xác định bài học đang được vận dụng","Các tình huống chỉ là ví dụ minh họa, không phải sự kiện lịch sử"]},
  qs:[
  ["Một nhóm sinh viên triển khai dự án cộng đồng, lắng nghe nhu cầu người dân và để người dân cùng tham gia quyết định. Nhóm vận dụng bài học nào?",["Kiên định độc lập dân tộc gắn với CNXH","Sự nghiệp cách mạng là của nhân dân, do nhân dân và vì nhân dân","Kết hợp sức mạnh dân tộc với sức mạnh thời đại","Sự lãnh đạo đúng đắn là nhân tố hàng đầu"],1,"Tình huống đặt người dân ở vị trí trung tâm."],
  ["Doanh nghiệp Việt Nam tiếp nhận công nghệ quốc tế, đồng thời đầu tư nghiên cứu để làm chủ công nghệ. Đây là vận dụng bài học nào?",["Chỉ dựa vào nguồn lực bên ngoài","Kết hợp sức mạnh dân tộc với sức mạnh thời đại","Chỉ bảo tồn truyền thống","Không cần hợp tác"],1,"Doanh nghiệp phát huy nội lực và tranh thủ tri thức, công nghệ quốc tế."],
  ["Khi các thành viên có quan điểm khác nhau, cách xử lý nào phù hợp với bài học đoàn kết?",["Loại bỏ ý kiến khác biệt","Mỗi người làm riêng","Lắng nghe, tôn trọng khác biệt và thống nhất mục tiêu chung","Chỉ một người quyết định"],2,"Tài liệu nhấn mạnh hợp tác và tôn trọng khác biệt."],
  ["Sinh viên muốn đóng góp trong bối cảnh chuyển đổi số. Hành động nào phù hợp nhất?",["Chỉ dùng công nghệ giải trí","Chủ động học tập, nâng cao năng lực công nghệ, sáng tạo và có trách nhiệm cộng đồng","Tránh tri thức mới","Chỉ quan tâm lợi ích cá nhân"],1,"Đây là trách nhiệm về tri thức, hành động và cộng đồng của thế hệ trẻ."],
  ["Hội nhập nhưng vẫn bảo vệ bản sắc văn hóa và lợi ích dân tộc cần lựa chọn cách làm nào?",["Đóng cửa, không giao lưu","Tiếp thu có chọn lọc tinh hoa nhân loại, giữ gìn bản sắc và độc lập tự chủ","Từ bỏ bản sắc","Chỉ tiếp nhận nguồn lực, không xây dựng năng lực trong nước"],1,"Tài liệu yêu cầu hội nhập chủ động, có chọn lọc."]
 ]},
 {lv:"Cấp độ 4 · Vận dụng cao",name:"Phòng Kỷ nguyên mới",pts:40,
  desc:"Bài toán nhiều vế: chọn giải pháp cân bằng nhất và giải thích vì sao.",
  plaque:{t:"Gợi ý",l:["Đáp án đúng thường kết hợp hai vế: nội lực với ngoại lực, tăng trưởng với công bằng","Kế thừa giá trị đã khẳng định, vận dụng sáng tạo vào bối cảnh mới"]},
  qs:[
  ["Một địa phương thúc đẩy chuyển đổi số nhưng một bộ phận người dân thiếu kỹ năng và điều kiện tiếp cận. Giải pháp nào vận dụng tốt nhất bài học lấy nhân dân làm trung tâm và đoàn kết?",["Chỉ triển khai nền tảng, không khảo sát người dùng","Hỗ trợ kỹ năng số, cải thiện khả năng tiếp cận và huy động cộng đồng tham gia","Chỉ ưu tiên người đã thành thạo công nghệ","Dừng chuyển đổi số"],1,"Giải pháp đáp ứng nhu cầu người dân và huy động cộng đồng cùng tham gia."],
  ["Trong cạnh tranh công nghệ toàn cầu, chiến lược nào phù hợp nhất với tinh thần tự chủ và kết hợp nội lực – ngoại lực?",["Chỉ nhập khẩu công nghệ","Từ chối hợp tác quốc tế","Phát triển nhân lực, nghiên cứu, doanh nghiệp trong nước; đồng thời hợp tác và tiếp nhận công nghệ có chọn lọc","Chỉ mở rộng thị trường"],2,"Cần phát huy nội lực, tranh thủ ngoại lực và nâng cao năng lực làm chủ công nghệ."],
  ["Một chương trình tăng trưởng kinh tế cao nhưng chưa quan tâm đúng mức đến công bằng xã hội. Điều chỉnh nào phù hợp?",["Chỉ tiếp tục ưu tiên tốc độ tăng trưởng","Gắn phát triển kinh tế với tiến bộ, công bằng xã hội; giữ vững độc lập, chủ quyền và lợi ích quốc gia","Dừng phát triển kinh tế","Chỉ tập trung chỉ tiêu ngắn hạn"],1,"Tài liệu yêu cầu gắn phát triển kinh tế với tiến bộ, công bằng xã hội."],
  ["Nhận định nào khái quát đúng tinh thần vận dụng bài học lịch sử trong kỷ nguyên mới?",["Lặp lại nguyên trạng mọi cách làm trong quá khứ","Giữ khẩu hiệu nhưng không thay đổi cách thực hiện","Kế thừa giá trị đã được khẳng định và vận dụng sáng tạo phù hợp bối cảnh mới","Tách rời hiện tại khỏi kinh nghiệm lịch sử"],2,"Tài liệu nhấn mạnh vận dụng sáng tạo giá trị lịch sử trong điều kiện mới."]
 ]}
];

export const TOTAL_Q = ROOMS.reduce((n, r) => n + r.qs.length, 0);
export const MAX = ROOMS.reduce((n, r) => n + r.qs.length * r.pts, 0);

// Thời gian cho mỗi câu (giây)
export const QTIME = 20;

// Mã hoá đáp án thành chuỗi 20 ký tự:
// "0"-"3" = đã chọn, "x" = hết giờ (tính là sai), "-" = chưa trả lời
// Trong bộ nhớ: 0-3 = đã chọn, -1 = hết giờ, null = chưa trả lời
export const encode = a => a.flat().map(x => x === null ? "-" : x < 0 ? "x" : String(x)).join("");
export const decode = s => {
  let k = 0;
  return ROOMS.map(r => r.qs.map(() => {
    const c = (s || "")[k++];
    return c >= "0" && c <= "3" ? +c : c === "x" ? -1 : null;
  }));
};

// Thời gian trả lời từng câu, đơn vị 1/10 giây, nối bằng dấu phẩy ("73,200,,,...")
export const encodeT = t => t.flat().map(x => x == null ? "" : x).join(",");
export const decodeT = s => {
  const p = String(s || "").split(",");
  let k = 0;
  return ROOMS.map(r => r.qs.map(() => {
    const v = p[k++];
    return v === undefined || v === "" || isNaN(+v) ? null : Math.min(+v, QTIME * 10);
  }));
};
// Tổng thời gian (1/10 giây) của các câu đã trả lời
export const totalT = t => t.flat().reduce((n, x) => n + (x || 0), 0);

// Tính điểm từ chuỗi đáp án
export function scoreOf(a) {
  let right = 0, points = 0, answered = 0;
  a.forEach((room, i) => room.forEach((x, j) => {
    if (x === null) return;
    answered++;
    if (x === ROOMS[i].qs[j][2]) { right++; points += ROOMS[i].pts; }
  }));
  return { right, points, answered, done: answered === TOTAL_Q };
}

export const keyOf = s => (s || "").normalize("NFC").trim().replace(/\s+/g, " ").toLocaleLowerCase("vi");
