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

> Hãy thực hành trong file day05.js để hiểu rõ hơn về object và array trong JavaScript!
