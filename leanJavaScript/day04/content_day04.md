# Ngày 4: Kiểu dữ liệu trong JavaScript (Number, String, Boolean, Null, Undefined)

## 1. Kiểu dữ liệu là gì?
Kiểu dữ liệu (data type) xác định loại giá trị mà một biến có thể lưu trữ và các phép toán có thể thực hiện trên giá trị đó.

## 2. Các kiểu dữ liệu cơ bản trong JavaScript
- **Number**: Số (cả số nguyên và số thực)
- **String**: Chuỗi ký tự
- **Boolean**: Giá trị đúng/sai (true/false)
- **Null**: Giá trị rỗng, không có gì
- **Undefined**: Biến được khai báo nhưng chưa gán giá trị

## 3. Ví dụ về từng kiểu dữ liệu
```javascript
// Number
const age = 25;
const price = 19.99;

// String
const name = "Alice";
const message = 'Hello, world!';

// Boolean
const isActive = true;
const isAdmin = false;

// Null
const emptyValue = null;

// Undefined
let notAssigned;
console.log(notAssigned); // undefined
```

## 4. Kiểm tra kiểu dữ liệu với typeof
```javascript
console.log(typeof age);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof emptyValue); // "object" (đặc biệt: typeof null trả về "object")
console.log(typeof notAssigned);// "undefined"
```

## 5. Lưu ý
- `typeof null` trả về "object" là một lỗi lịch sử của JavaScript.
- Chuỗi có thể dùng dấu nháy đơn (' '), nháy kép (" "), hoặc backtick (` `) cho template string.
- Số trong JavaScript không phân biệt số nguyên và số thực, đều là kiểu number.

## 6. Thực hành
- Tạo file `day04.js` và khai báo biến với các kiểu dữ liệu trên, dùng `typeof` để kiểm tra kiểu dữ liệu.
- Thử gán giá trị null và undefined cho biến, quan sát kết quả.

> Hãy thực hành và quan sát kết quả trên console để hiểu rõ hơn về các kiểu dữ liệu cơ bản trong JavaScript!