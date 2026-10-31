# Bảo tàng Bài học Lịch sử Đảng · bản thi đấu theo nhóm

- **Trang chơi** (`/`): mỗi nhóm nhập *tên nhóm* + *tên người đại diện* rồi chơi 4 phòng / 20 câu. Mỗi câu có **20 giây** (hết giờ tính là sai; tải lại trang không được cộng thêm giờ). Mỗi câu trả lời và thời gian trả lời được gửi lên máy chủ ngay lập tức.
- **Trang ban tổ chức** (`/admin`): bảng xếp hạng cập nhật trực tiếp, có các mục sau:
  - tổng quan: số nhóm, số nhóm đang online, số nhóm đã xong, điểm trung bình, điểm cao nhất
  - tiến độ từng nhóm theo 4 phòng (chấm vàng là câu đúng, chấm đỏ là câu sai), thời gian làm bài, trạng thái online hay offline
  - tỉ lệ đúng của từng câu hỏi
  - nút Trình chiếu (toàn màn hình, để chiếu lên máy chiếu), Xuất CSV (mở được bằng Excel), Xóa một nhóm, Xóa tất cả

**Cách xếp hạng:** nhóm nhiều điểm hơn đứng trên. Bằng điểm thì nhóm có **tổng thời gian làm bài** ít hơn đứng trên. Tổng thời gian là tổng số giây nhóm dùng để trả lời từng câu (câu hết giờ tính 20 giây), nên thời gian đọc hiện vật hay chuyển phòng không bị tính.

## Cấu trúc file

```
index.html            trang chơi
admin.html            trang ban tổ chức
js/config.js          ← CHỈ CẦN SỬA FILE NÀY (cấu hình Firebase + mã PIN)
js/questions.js       20 câu hỏi (giữ nguyên bản gốc)
js/store.js           kết nối Firebase / chế độ thử
database.rules.json   luật bảo vệ dữ liệu cho Firebase
vercel.json           cho phép vào /admin không cần đuôi .html
```

## Bước 1. Tạo Firebase Realtime Database (miễn phí, khoảng 5 phút)

1. Vào https://console.firebase.google.com, bấm **Add project** / **Tạo dự án**, đặt tên tùy ý (ví dụ `vnr-duy`). Có thể tắt Google Analytics.
2. Ở menu trái, chọn **Build → Realtime Database**, bấm **Create Database**.
   - Location: **Singapore (asia-southeast1)**, chọn vùng này để nhanh nhất cho Việt Nam.
   - Security rules: chọn **Start in locked mode**.
3. Mở tab **Rules**, xóa hết nội dung cũ, dán toàn bộ nội dung file `database.rules.json` vào rồi bấm **Publish**.
4. Bấm biểu tượng bánh răng, chọn **Project settings**, kéo xuống mục **Your apps** rồi bấm biểu tượng **`</>`** (Web). Đặt tên app rồi bấm **Register app**. Không cần bật Firebase Hosting.
5. Firebase hiện ra một đoạn `const firebaseConfig = { ... }`. Chép các giá trị trong đó vào `js/config.js`:

```js
firebase: {
  apiKey: "AIza...",
  authDomain: "vnr-duy.firebaseapp.com",
  databaseURL: "https://vnr-duy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vnr-duy",
  storageBucket: "vnr-duy.appspot.com",
  messagingSenderId: "123...",
  appId: "1:123...:web:abc..."
},
```

> ⚠️ Phải có **`databaseURL`**. Nếu đoạn config không có dòng này, hãy làm bước 2 trước rồi chép lại; hoặc lấy URL ở đầu trang Realtime Database, tab Data.

6. Đổi `ADMIN_PIN` trong `js/config.js` thành mã riêng của nhóm bạn.

## Bước 2. Đưa lên Vercel

**Nếu trang đang deploy từ GitHub:** thay các file trong repo bằng các file trong thư mục này (giữ đúng cấu trúc, gồm cả thư mục `js/`), rồi commit và push. Vercel sẽ tự deploy lại.

**Nếu không dùng GitHub:** cài Vercel CLI (`npm i -g vercel`), mở thư mục này rồi chạy `vercel --prod` và chọn đúng project `vnr-duy`.

Sau khi deploy:
- Gửi link cho các nhóm chơi: `https://vnr-duy.vercel.app/`
- Ban tổ chức mở: `https://vnr-duy.vercel.app/admin`

## Chạy thử trên máy (không bắt buộc)

Trang dùng JavaScript module nên **không mở trực tiếp bằng cách nhấp đúp file**. Hãy chạy một máy chủ nhỏ:

```bash
npx serve .          # hoặc: python -m http.server 8080
```

Nếu `js/config.js` chưa có cấu hình Firebase, trang chạy ở **chế độ thử**. Khi đó điểm chỉ đồng bộ giữa các tab trong cùng một trình duyệt. Chế độ này đủ để xem giao diện admin, nhưng không dùng được khi thi thật.

## Khi tổ chức chơi

- Trước giờ chơi, vào `/admin` và bấm **Xóa tất cả** để dọn dữ liệu chạy thử. Nút này phải bấm 2 lần để xác nhận.
- Nhóm nào lỡ đóng trang hoặc đổi máy: nhập lại **đúng tên nhóm và đúng tên đại diện** sẽ chơi tiếp được từ chỗ đang dừng. Nếu tên nhóm đã có nhưng tên đại diện khác, trang sẽ báo trùng tên.
- Khi ban tổ chức xóa một nhóm, máy của nhóm đó tự quay về màn đăng ký.
- Muốn tách riêng từng lớp hoặc từng buổi: đổi `DB_PATH` trong `js/config.js` (ví dụ `"vnr/lop-2"`) rồi deploy lại.
- Gói miễn phí (Spark) của Firebase cho tối đa **100 kết nối cùng lúc**. Con số này dư cho một lớp học.

## Lưu ý về bảo mật

Trang là web tĩnh, không có tài khoản đăng nhập, nên:
- Mã PIN trang admin chỉ là lớp chặn nhẹ: người xem mã nguồn vẫn đọc được PIN.
- Người rành kỹ thuật có thể sửa dữ liệu qua console trình duyệt. Trang admin luôn tính lại điểm từ đáp án đã chọn (không tin số điểm do máy người chơi gửi lên), và luật trong `database.rules.json` chặn dữ liệu sai định dạng. Với một buổi chơi trên lớp, như vậy là đủ.

## Thay đổi so với bản gốc

- Thêm màn đăng ký nhóm, tên nhóm hiển thị trên thanh trên cùng, và chấm trạng thái kết nối.
- Bỏ nút "Tham quan lại" ở màn kết quả, để các nhóm không reset rồi chơi lại lấy điểm cao hơn. Mỗi câu vẫn chỉ được chọn một lần như cũ.
- Thêm đồng hồ 20 giây cho mỗi câu và xếp hạng theo tổng thời gian làm bài.
- Sửa điểm tối đa: bản gốc ghi **/ 600**, nhưng 20 câu theo thang 10, 20, 30, 40 thực tế cộng lại tối đa **480** (5×10 + 6×20 + 5×30 + 4×40). Bản mới tự tính con số này từ bộ câu hỏi.
