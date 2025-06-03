// ### Bài 1: Tạo và thao tác với Object
// 1. Tạo một object tên student gồm các thuộc tính: name, age, gender, scores (là một mảng số).
// 2. Thêm thuộc tính address cho student.
// 3. Thay đổi giá trị age của student.
// 4. In ra toàn bộ thông tin student bằng console.log.
const student = {
    name: "To Lam",
    age: 70,
    gender: "Male",
    scrores : [10, 6, 8, 8, 10, 11]
};

student.address = "123 Ngo Quyen, Hai Phong";
student.age = 75;
// console.log(student);

// =======================================
// ### Bài 2: Tạo và thao tác với Array
// 1. Tạo một mảng students chứa 3 object student khác nhau (mỗi object có name, age, gender).
// 2. Thêm một student mới vào mảng.
// 3. Thay đổi tên của student thứ 2 trong mảng.
// 4. Xóa student cuối cùng khỏi mảng.
// 5. In ra toàn bộ mảng students bằng console.log.
const students = new Array();
students.push(student);
students.push({
    name: "PHong",
    age: 46,
    gender: "Male"
});

students.push({
    name: "Hoang",
    age: 30,
    gender: "Female"
});

console.log(students);

students[1].name = "New Name";
students.splice(students.length - 1, 1); // Xóa student cuối cùng

console.log(students);

delete student.scrores; // Xóa thuộc tính scores của student
console.log(students);
// In ra toàn bộ mảng students