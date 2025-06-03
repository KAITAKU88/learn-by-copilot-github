// ### Bài 3: Kết hợp Object và Array
// 1. Tạo một object classRoom gồm các thuộc tính: className (string), teacher (string), students (array chứa các object student).
// 2. Thêm một student mới vào classRoom.students.
// 3. In ra số lượng học sinh trong lớp (classRoom.students.length).
// 4. In ra tên tất cả học sinh trong lớp bằng vòng lặp for hoặc forEach.
const classRoom = new Object();
classRoom.className = "Class 1A";
classRoom.teacher = "Mr. Peter";
classRoom.students = [
    {name:"Alice", age:20, gender:"Female"},
    {name:"Thomas", age:22, gender: "Male"},
    {name: "Linda", age: 25, gender: "Female"}

];
console.log(classRoom.students);

classRoom.students.push({name:"Bob", age:25, gender:"Male"});

console.log(classRoom.students);

console.log(classRoom.students.length);

console.log("===========================");
// In ra tên tất cả học sinh trong lớp dùng for 
for (let i = 0; i < classRoom.students.length; i++){
    console.log(classRoom.students[i].name);
}

//Ỉn ra tên tất cả học sinh trong lớp dùng forEach

classRoom.students.forEach(element => {
    console.log(element.name);
});