# Ngày 1: Giới thiệu về JavaScript, ứng dụng thực tế

## JavaScript là gì?
JavaScript là một ngôn ngữ lập trình phổ biến dùng để phát triển web, giúp trang web trở nên tương tác và sinh động. JavaScript có thể chạy trên trình duyệt (Chrome, Firefox, Edge,...) và cả phía server (Node.js).

## Ứng dụng thực tế của JavaScript
- Tạo hiệu ứng động cho website (menu, popup, slider,...)
- Xử lý sự kiện người dùng (click, nhập liệu,...)
- Giao tiếp với server (AJAX, fetch API)
- Xây dựng ứng dụng web, mobile (React, Vue, Angular, React Native)
- Lập trình server (Node.js)

## Cách chạy JavaScript
- Nhúng trực tiếp vào file HTML với thẻ `<script>`
- Viết file `.js` và nhúng vào HTML
- Chạy bằng Node.js trên máy tính

## Cách viết comment trong JavaScript
- Comment một dòng: `// Đây là comment một dòng`
- Comment nhiều dòng:
```javascript
/*
Đây là comment
nhiều dòng
*/
```

## In ra màn hình trong JavaScript
Sử dụng lệnh:
```javascript
console.log("Nội dung cần in ra màn hình");
```
Ví dụ:
```javascript
console.log("Hello, JavaScript!");
```

## Chạy file JavaScript trong trình duyệt
1. Tạo file HTML (ví dụ: `index.html`) cùng thư mục với file `.js`.
2. Thêm đoạn sau vào file HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Chạy JavaScript</title>
</head>
<body>
  <script src="day01.js"></script>
</body>
</html>
```
3. Mở file HTML bằng trình duyệt, mở DevTools (F12), chọn tab Console để xem kết quả.

## Chạy file JavaScript bằng Node.js trong VSCode
- Mở Terminal trong VSCode
- Chạy lệnh: `node day01.js`
- Kết quả sẽ hiển thị trong Terminal

## Node.js là gì?
Node.js là môi trường chạy JavaScript phía server, cho phép bạn sử dụng JavaScript để xây dựng các ứng dụng máy chủ, API, công cụ dòng lệnh,... Node.js sử dụng engine V8 của Google Chrome để thực thi mã JavaScript.

> Để chạy JavaScript ở local (không cần trình duyệt), bạn cần cài đặt Node.js.