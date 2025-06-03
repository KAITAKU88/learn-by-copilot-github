# Ngày 2: Cách nhúng JavaScript vào HTML (thẻ <script>)

## 1. Nhúng JavaScript trực tiếp trong file HTML
Bạn có thể viết mã JavaScript trực tiếp trong thẻ `<script>` trong file HTML.

**Ví dụ:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Nhúng JavaScript trực tiếp</title>
</head>
<body>
  <script>
    alert("Xin chào! Đây là JavaScript được nhúng trực tiếp.");
    console.log("Dòng này sẽ xuất hiện trong tab Console của DevTools.");
  </script>
</body>
</html>
```

## 2. Nhúng file JavaScript bên ngoài vào HTML
Bạn có thể tách mã JavaScript ra file riêng (ví dụ: `day02.js`) và nhúng vào HTML bằng thuộc tính `src` của thẻ `<script>`.

**Ví dụ:**
- File `day02.js`:
```javascript
alert("Xin chào từ file day02.js!");
console.log("Đây là log từ file day02.js");
```
- File `day02.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Nhúng file JavaScript bên ngoài</title>
</head>
<body>
  <script src="day02.js"></script>
</body>
</html>
```

## 3. Thực hành
- Tạo file `day02.js` với nội dung ví dụ trên.
- Tạo file `day02.html` với nội dung ví dụ trên.
- Mở file `day02.html` bằng trình duyệt, bạn sẽ thấy thông báo và có thể kiểm tra log trong tab Console (F12).

## 4. Ghi chú
- Thẻ `<script>` thường đặt trước thẻ `</body>` để đảm bảo HTML được tải xong trước khi chạy JavaScript.
- Có thể dùng nhiều thẻ `<script>` trong một file HTML.
- Khi dùng thuộc tính `src`, không nên viết mã JavaScript bên trong thẻ `<script>` đó.

## Tổng hợp nội dung trò chuyện ngày 03/06/2025

### 1. Cách nhúng JavaScript vào HTML
- Có 2 cách: viết trực tiếp trong thẻ `<script>` hoặc liên kết file .js bên ngoài bằng thuộc tính `src`.
- Khi dùng `src`, không nên viết mã JavaScript bên trong thẻ `<script>` đó.
- Thẻ `<script>` nên đặt trước thẻ `</body>` để đảm bảo HTML tải xong trước khi chạy JS.

### 2. Sự khác nhau giữa alert và console.log
- `alert(...)`: Hiển thị popup thông báo cho người dùng, phải bấm OK mới tắt.
- `console.log(...)`: Ghi log ra tab Console của DevTools (F12) hoặc terminal (nếu chạy bằng Node.js), chỉ lập trình viên thấy.

### 3. Mở file HTML trong trình duyệt khi dùng WSL Ubuntu
- Lệnh `google-chrome` không dùng được nếu Chrome chỉ cài trên Windows.
- Lệnh `xdg-open` cần cài thêm gói `xdg-utils`.
- Cách đơn giản nhất: dùng lệnh `explorer.exe path/to/file.html` trong WSL để mở file bằng trình duyệt mặc định trên Windows (nếu Chrome là mặc định thì sẽ mở bằng Chrome).

### 4. Mở file HTML trong VSCode bằng Simple Browser
- Có thể dùng tính năng Simple Browser để xem file HTML ngay trong VSCode:
    - Nhấn `Ctrl + Shift + P`, gõ "Simple Browser: Show" rồi nhập đường dẫn file HTML.
    - Hoặc dùng lệnh mở nhanh nếu có extension hỗ trợ.

### 5. Một số phím tắt hữu ích trong VSCode
- `Ctrl + 1`: Chuyển về khu vực soạn thảo file.
- `Ctrl + Tab`: Di chuyển giữa các file đang mở.
- `Ctrl + J`: Ẩn/hiện terminal.
- `Ctrl + ``: Mở hoặc chuyển vào terminal.
- `Ctrl + Shift + I`: Vào phần Chat Copilot.

> Bạn đã hoàn thành nội dung ngày 02 và nắm được cách nhúng, chạy, kiểm tra JavaScript trong HTML, cũng như các thao tác mở file và sử dụng phím tắt hiệu quả trong VSCode và WSL.