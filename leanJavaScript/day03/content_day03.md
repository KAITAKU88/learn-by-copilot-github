# Ngày 3: Biến trong JavaScript (var, let, const)

## 1. Biến là gì?
Biến (variable) là một vùng nhớ dùng để lưu trữ giá trị và có thể thay đổi trong quá trình thực thi chương trình.

## 2. Khai báo biến trong JavaScript
Có 3 cách khai báo biến:
- `var`: Cách khai báo cũ, có phạm vi function scope.
- `let`: Khai báo biến có thể thay đổi giá trị, phạm vi block scope (ES6).
- `const`: Khai báo hằng số, không thể gán lại giá trị, phạm vi block scope (ES6).

## 3. Cú pháp và ví dụ
```javascript
// Khai báo với var
var a = 10;
console.log(a); // 10

// Khai báo với let
let b = 20;
console.log(b); // 20
b = 25; // Có thể gán lại
console.log(b); // 25

// Khai báo với const
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.1415; // Lỗi: không thể gán lại giá trị cho const
```

## 4. So sánh var, let, const
| Từ khóa | Có thể gán lại | Phạm vi (scope)      | Hoisting |
|---------|----------------|---------------------|----------|
| var     | Có             | function            | Có       |
| let     | Có             | block               | Có*      |
| const   | Không          | block               | Có*      |

> *let và const được hoisting nhưng không thể sử dụng trước khi khai báo (temporal dead zone).

## 5. Quy tắc đặt tên biến
- Chỉ dùng chữ cái, số, dấu gạch dưới `_`, hoặc `$`.
- Không bắt đầu bằng số.
- Phân biệt chữ hoa và chữ thường.
- Nên đặt tên có ý nghĩa, dùng camelCase.

## 5.1. Bài tập: Phân biệt tên biến đúng và sai

Dưới đây là 20 tên biến, hãy xác định tên nào đúng, tên nào sai theo quy tắc đặt tên biến trong JavaScript:

1. myVariable
2. _count
3. $result
4. 2ndValue
5. user-name
6. totalAmount
7. let
8. first_name
9. userAge
10. @price
11. MAX_VALUE
12. my variable
13. sum1
14. #hash
15. _
16. $$_temp
17. 123abc
18. camelCaseExample
19. var
20. tênBiến

> Gợi ý: Tên biến đúng không bắt đầu bằng số, không chứa ký tự đặc biệt (trừ _ và $), không trùng từ khóa JavaScript, không có dấu cách, phân biệt chữ hoa chữ thường, nên dùng camelCase.

Hãy thử tự phân loại và kiểm tra đáp án ở phần sau!

## 5.2. Đáp án và giải thích bài tập tên biến

| Tên biến         | Đúng/Sai | Giải thích                                                                 |
|------------------|----------|----------------------------------------------------------------------------|
| myVariable       | Đúng     | Bắt đầu bằng chữ, dùng camelCase, hợp lệ                                   |
| _count           | Đúng     | Bắt đầu bằng dấu gạch dưới, hợp lệ                                         |
| $result          | Đúng     | Bắt đầu bằng $, hợp lệ                                                      |
| 2ndValue         | Sai      | Bắt đầu bằng số, không hợp lệ                                               |
| user-name        | Sai      | Có dấu gạch ngang (-), không hợp lệ                                         |
| totalAmount      | Đúng     | Bắt đầu bằng chữ, camelCase, hợp lệ                                         |
| let              | Sai      | Trùng từ khóa của JavaScript                                                |
| first_name       | Đúng     | Dùng dấu gạch dưới, hợp lệ                                                  |
| userAge          | Đúng     | Bắt đầu bằng chữ, camelCase, hợp lệ                                         |
| @price           | Sai      | Bắt đầu bằng ký tự đặc biệt không hợp lệ (@)                                |
| MAX_VALUE        | Đúng     | Dùng chữ hoa và dấu gạch dưới, hợp lệ                                       |
| my variable      | Sai      | Có dấu cách, không hợp lệ                                                   |
| sum1             | Đúng     | Bắt đầu bằng chữ, có số ở cuối, hợp lệ                                      |
| #hash            | Sai      | Bắt đầu bằng ký tự đặc biệt không hợp lệ (#)                                |
| _                | Đúng     | Một dấu gạch dưới là hợp lệ                                                 |
| $$_temp          | Đúng     | Dùng $, _, hợp lệ                                                           |
| 123abc           | Sai      | Bắt đầu bằng số, không hợp lệ                                               |
| camelCaseExample | Đúng     | Dùng camelCase, hợp lệ                                                      |
| var              | Sai      | Trùng từ khóa của JavaScript                                                |
| tênBiến          | Đúng     | JavaScript hỗ trợ Unicode, tên biến tiếng Việt hợp lệ nếu không vi phạm quy tắc |

> Lưu ý: Không nên đặt tên biến trùng từ khóa (let, var, const, if, for,...) dù JavaScript có thể cho phép trong một số trường hợp, nhưng sẽ gây lỗi hoặc khó đọc code.

Bạn hãy so sánh với đáp án này để kiểm tra kết quả luyện tập của mình!

## 6. Thực hành
- Tạo file `day03.js` và thử khai báo biến với var, let, const, in ra giá trị bằng `console.log`.
- Thử gán lại giá trị cho let và const để thấy sự khác biệt.

> Hãy thực hành và quan sát kết quả trên console để hiểu rõ hơn về biến trong JavaScript!

## 7. Hỏi đáp - Giải thích mở rộng về biến trong JavaScript (Ngày 3)

### 7.1. Biến là vùng nhớ vật lý hay là con trỏ?
- Biến nguyên thủy (number, string, boolean, null, undefined, symbol, bigint) lưu trực tiếp giá trị trên stack (vùng nhớ vật lý nhỏ, truy xuất nhanh).
- Biến phức tạp (object, array, function) lưu địa chỉ (con trỏ) trên stack, còn dữ liệu thực sự nằm trên heap (vùng nhớ động, linh hoạt).

### 7.2. Tại sao object, array... lại lưu trên heap, không lưu trực tiếp trên stack?
- Vì kích thước của object, array có thể thay đổi linh hoạt, không cố định như biến nguyên thủy.
- Nếu lưu trực tiếp trên stack sẽ khó quản lý, tốn bộ nhớ khi truyền biến vào hàm hoặc gán cho biến khác.
- Lưu trên heap giúp tiết kiệm bộ nhớ, dễ chia sẻ dữ liệu, quản lý động hiệu quả hơn.

### 7.3. Heap là gì?
- Heap là vùng nhớ động trong RAM, dùng để lưu trữ dữ liệu phức tạp (object, array, function...).
- Biến chỉ giữ địa chỉ trỏ đến vùng nhớ trên heap.
- Dữ liệu trên heap tồn tại đến khi không còn biến nào tham chiếu, lúc đó sẽ được giải phóng bởi garbage collector.

### 7.4. Stack là gì?
- Stack là vùng nhớ nhỏ, dùng để lưu các biến nguyên thủy, địa chỉ tham chiếu, lời gọi hàm, v.v.
- Truy xuất nhanh, nhưng không phù hợp cho dữ liệu lớn hoặc thay đổi linh hoạt.

### 7.5. Có nên dùng var trong code hiện đại không?
- Không nên dùng var trong code mới. Hãy dùng let (khi cần thay đổi giá trị) và const (khi không thay đổi giá trị).
- var chỉ nên dùng khi cần tương thích với mã JavaScript cũ.

### 7.6. Khi nào dùng let, khi nào dùng const?
- Dùng const mặc định cho mọi biến nếu không có ý định thay đổi giá trị.
- Dùng let khi cần thay đổi giá trị biến trong quá trình thực thi.
- Không phụ thuộc vào kiểu dữ liệu (số, chuỗi, object, array...), chỉ phụ thuộc vào ý định sử dụng của lập trình viên.

### 7.7. Hoisting là gì?
- Hoisting là cơ chế JavaScript "đưa" khai báo biến (var, let, const) và hàm lên đầu phạm vi (scope) trước khi thực thi code.
- var được hoist nhưng giá trị gán không được hoist (truy cập trước khi gán sẽ là undefined).
- let, const cũng được hoist nhưng nằm trong "temporal dead zone" (nếu truy cập trước khi khai báo sẽ lỗi).
- Function declaration được hoist toàn bộ, có thể gọi trước khi khai báo.

### 7.8. Lộ trình có học kỹ hơn về hoisting không?
- Có, ở Ngày 28 của lộ trình bạn sẽ học kỹ hơn về Hoisting, Scope và Closures.

> Đây là tổng hợp các câu hỏi và giải thích mở rộng liên quan đến bài học về biến trong JavaScript của ngày 3. Bạn có thể xem lại để củng cố kiến thức hoặc tra cứu nhanh khi cần thiết.

