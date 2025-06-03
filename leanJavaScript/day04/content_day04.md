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

## 7. Hỏi đáp - Hình tượng hóa về undefined và null

Bạn có thể hình dung:
- **undefined** giống như một đứa trẻ vừa sinh ra mà bố mẹ quên chưa đặt tên, chưa xác định gì cho nó cả. Biến được khai báo nhưng chưa gán giá trị nào.
- **null** là một cái tên rất đặc biệt, giống như đặt tên cho con là "Không tên". Đây là giá trị mà lập trình viên chủ động gán cho biến để thể hiện "biến này không có giá trị gì cả".

> Hình tượng này giúp bạn dễ nhớ hơn về sự khác biệt giữa undefined (tự động, chưa xác định) và null (chủ động, rỗng đặc biệt).

## 8. Hỏi đáp - Giải thích mở rộng về kiểu dữ liệu cơ bản (Ngày 4)

### 8.1. Sự khác nhau giữa null và undefined
- **undefined**: Là giá trị mặc định của biến khi khai báo mà chưa gán giá trị. Do hệ thống tự động gán.
- **null**: Là giá trị do lập trình viên chủ động gán cho biến để thể hiện "không có giá trị" hoặc "rỗng".
- Cả hai đều mang ý nghĩa "không có giá trị", nhưng undefined là do hệ thống, null là do chủ động gán.

### 8.2. Vùng nhớ của null và undefined
- Cả null và undefined đều là giá trị nguyên thủy (primitive) trong JavaScript, nên vùng nhớ của chúng được lưu trực tiếp trên stack, giống như các kiểu dữ liệu nguyên thủy khác (number, string, boolean).
  - undefined: Khi bạn khai báo một biến mà chưa gán giá trị, biến đó sẽ có giá trị undefined và vùng nhớ trên stack sẽ lưu giá trị đặc biệt này.
  - null: Khi bạn chủ động gán null cho một biến, vùng nhớ trên stack sẽ lưu giá trị null (cũng là một giá trị đặc biệt, không phải là địa chỉ trỏ đến vùng nhớ nào khác).
- Tóm lại:
  - Cả null và undefined đều được lưu trực tiếp trên stack, không phải là con trỏ trỏ đến vùng nhớ nào khác.
  - Chúng chỉ là các giá trị đặc biệt để biểu diễn trạng thái "không có giá trị" (null) hoặc "chưa được gán giá trị" (undefined).

### 8.3. Vì sao typeof null trả về "object" là một lỗi lịch sử của JavaScript?
- Khi kiểm tra kiểu dữ liệu của null bằng `typeof null`, kết quả trả về là "object".
- Nguyên nhân: Trong phiên bản JavaScript đầu tiên (năm 1995), null được gán một mã kiểu (type tag) giống với object trong hệ thống nội bộ.
- Đây là một bug (lỗi) lịch sử, nhưng không thể sửa vì sẽ làm hỏng nhiều chương trình cũ (gây mất tương thích ngược).
- Thực tế, null không phải là object, mà chỉ là một giá trị đặc biệt đại diện cho "không có gì".
- Khi kiểm tra null, nên dùng so sánh trực tiếp (`value === null`) thay vì chỉ dựa vào typeof.

> Tóm lại: `typeof null` trả về "object" là do lỗi lịch sử, không phản ánh đúng bản chất của null trong JavaScript.

## 9. Hỏi đáp - Kiểu dữ liệu và từ khóa khai báo biến

- Việc một biến là kiểu gì (number, string, boolean, ...) hoàn toàn phụ thuộc vào giá trị mà nó nhận được, không liên quan đến việc khai báo bằng let hay const.
- Ví dụ:
  ```javascript
  let number1 = 10;   // number1 là kiểu number
  const number2 = 10; // number2 cũng là kiểu number
  let name = "Alice"; // name là kiểu string
  const isActive = true; // isActive là kiểu boolean
  ```
- let và const chỉ quyết định biến có thể thay đổi giá trị sau này hay không (let: có thể thay đổi, const: không thể thay đổi), không ảnh hưởng đến kiểu dữ liệu của biến.

> Tóm lại: Kiểu dữ liệu của biến phụ thuộc vào giá trị gán cho nó, không phụ thuộc vào từ khóa let hay const.
