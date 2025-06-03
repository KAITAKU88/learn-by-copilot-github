
// Thực hành về Object và Array sẽ được bổ sung khi bạn bắt đầu học ngày 5
//khai báo kiểu 1
const person_1 = {
    name: "Nguyen Van Chien",
    age: 28,
    isAdult: true
};
//khai báo kiểu 2
const person_2 = new Object();
person_2.name = "Nguyen thi Hoa";
person_2.age = 30;
person_2.isAdult = true;

//khai baos đối tượng số 3
const person_3 = new Object();
person_3.name = "Tong Thi Phong";
person_3.age =  10;
person_3.isAdult = false;

const person_array = new Array();
person_array.push(person_1);
person_array.push(person_2);
person_array.push(person_3);

console.log(person_array);

// console.log(person_array[0]);

person_array[0] = {
    name: "Nguyen Van xyzzzzz",
    age: 28,
    isAdult: true,
};

console.log(person_array);
