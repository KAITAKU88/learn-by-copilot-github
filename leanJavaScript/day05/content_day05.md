# Ngày 5: Kiểu dữ liệu Object, Array trong JavaScript

## 1. Object là gì?
Object (đối tượng) là kiểu dữ liệu dùng để lưu trữ nhiều giá trị dưới dạng cặp key-value (thuộc tính - giá trị). Mỗi thuộc tính có thể là bất kỳ kiểu dữ liệu nào, kể cả function (phương thức).

### Cách khai báo object
```javascript
// Cách 1: Dùng dấu ngoặc nhọn {}
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

// Cách 2: Dùng từ khóa new Object()
const car = new Object();
car.brand = "Toyota";
car.year = 2020;
```

### Truy cập và thay đổi thuộc tính object
```javascript
console.log(person.name);      // "Alice"
console.log(person["age"]);   // 25
person.age = 26;               // Thay đổi giá trị
person.city = "Hanoi";        // Thêm thuộc tính mới
```

## 2. Array là gì?
Array (mảng) là kiểu dữ liệu dùng để lưu trữ nhiều giá trị theo thứ tự, mỗi giá trị gọi là một phần tử (element), đánh số từ 0.

### Cách khai báo array
```javascript
// Cách 1: Dùng dấu ngoặc vuông []
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// Cách 2: Dùng từ khóa new Array()
const scores = new Array(10, 20, 30);
```

### Truy cập và thay đổi phần tử array
```javascript
console.log(numbers[0]); // 1
numbers[1] = 100;        // Thay đổi giá trị phần tử
numbers.push(6);         // Thêm phần tử vào cuối mảng
console.log(numbers.length); // Độ dài mảng
```

## 3. So sánh Object và Array
- Object lưu trữ dữ liệu theo cặp key-value, key là chuỗi (hoặc symbol).
- Array lưu trữ dữ liệu theo chỉ số (index) từ 0, key là số nguyên.
- Array thực chất cũng là object đặc biệt, nhưng dùng cho dữ liệu có thứ tự.

## 4. Thực hành
- Tạo object và array, truy cập, thay đổi, thêm thuộc tính/phần tử.
- Sử dụng console.log để quan sát kết quả.

## 5. Bài tập thực hành về Object và Array

### Bài 1: Tạo và thao tác với Object
1. Tạo một object tên student gồm các thuộc tính: name, age, gender, scores (là một mảng số).
2. Thêm thuộc tính address cho student.
3. Thay đổi giá trị age của student.
4. In ra toàn bộ thông tin student bằng console.log.

### Bài 2: Tạo và thao tác với Array
1. Tạo một mảng students chứa 3 object student khác nhau (mỗi object có name, age, gender).
2. Thêm một student mới vào mảng.
3. Thay đổi tên của student thứ 2 trong mảng.
4. Xóa student cuối cùng khỏi mảng.
5. In ra toàn bộ mảng students bằng console.log.

### Bài 3: Kết hợp Object và Array
1. Tạo một object classRoom gồm các thuộc tính: className (string), teacher (string), students (array chứa các object student).
2. Thêm một student mới vào classRoom.students.
3. In ra số lượng học sinh trong lớp (classRoom.students.length).
4. In ra tên tất cả học sinh trong lớp bằng vòng lặp for hoặc forEach.

> Hãy thực hành các bài tập này trong file day05.js và sử dụng console.log để kiểm tra kết quả!

## 6. Hỏi đáp - Giải thích mở rộng về Object và Array (Ngày 5)

### 6.1. Dấu chấm phẩy (;) trong JavaScript
- Không bắt buộc phải có ở cuối mỗi dòng, vì JavaScript có cơ chế tự động thêm dấu chấm phẩy (ASI).
- Tuy nhiên, nên dùng để code rõ ràng, tránh lỗi khó phát hiện.

### 6.2. Khai báo mảng bằng const vẫn có thể thay đổi nội dung bên trong
- Khi khai báo mảng/object bằng const, bạn không thể gán lại biến đó sang mảng/object khác, nhưng vẫn có thể thay đổi nội dung bên trong (push, pop, sửa phần tử, thêm thuộc tính...).
- Nếu dùng let, bạn có thể gán lại biến sang mảng/object khác.

### 6.3. Ý nghĩa của const và let với object/array
- const: Không cho phép gán lại biến, nhưng có thể thay đổi nội dung nếu là object/array.
- let: Có thể gán lại biến bất cứ lúc nào.

### 6.4. Các giá trị trong mảng có thể thuộc bất kỳ kiểu dữ liệu nào
- Mảng trong JavaScript có thể chứa số, chuỗi, boolean, object, null, undefined, array lồng nhau, function, v.v.

### 6.5. Xóa phần tử trong mảng
- Xóa phần tử cuối: array.pop()
- Xóa phần tử đầu: array.shift()
- Xóa phần tử ở vị trí bất kỳ: array.splice(index, 1)
- Xóa nhưng giữ nguyên độ dài mảng (phần tử bị undefined): delete array[index]

### 6.6. Xóa thuộc tính của object
- Dùng từ khóa delete: delete object.key hoặc delete object["key"]

### 6.7. for và forEach
- for: Vòng lặp truyền thống, gồm 3 phần (khởi tạo, điều kiện, cập nhật), khởi tạo chỉ chạy 1 lần, sau đó luân phiên kiểm tra điều kiện và cập nhật.
- forEach: Hàm của array, nhận vào một hàm callback, thực hiện với từng phần tử của mảng.
- Hai cách khai báo callback trong forEach (function truyền thống và arrow function) là tương đương về chức năng, chỉ khác về cú pháp và cách xử lý this.

### 6.8. Ví dụ forEach
```javascript
classRoom.students.forEach(function(student) {
    console.log(student.name);
});
// hoặc
classRoom.students.forEach(element => {
    console.log(element.name);
});
```

> Đây là tổng hợp các nội dung hỏi đáp, giải thích mở rộng liên quan đến bài học ngày 05 về object và array trong JavaScript.
