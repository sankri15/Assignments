// Q1. Difference between let, const, and var

function scopeExample() {
    var a = "I am var";
    let b = "I am let";
    const c = "I am const";

    console.log(a);
    console.log(b);
    console.log(c);
}

scopeExample();

/*
var   -> Function scoped, can be redeclared and updated.
let   -> Block scoped, can be updated but not redeclared.
const -> Block scoped, cannot be updated or redeclared.
*/


// Q2. Return second fruit from array

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
    return arr[1];
}

console.log("Q2:", getSecondFruit(fruits));


// Q3. Add element using push() and remove using pop()

function modifyArray(arr, element) {
    arr.push(element);
    arr.pop();
    return arr;
}

console.log("Q3:", modifyArray([1, 2, 3, 4], 5));


// Q4. Square numbers using map()

const numbers1 = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log("Q4:", squareNumbers(numbers1));


// Q5. Filter out even numbers

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log("Q5:", getOddNumbers(numbers2));


// Q6. Person object and greeting

const person = {
    name: "Sanjana",
    age: 21,
    occupation: "Student"
};

function greetPerson(obj) {
    console.log(
        `Hello! My name is ${obj.name}, I am ${obj.age} years old and I am a ${obj.occupation}.`
    );
}

greetPerson(person);


// Q7. Area of rectangle

function rectangleArea(rect) {
    return rect.width * rect.height;
}

console.log("Q7:", rectangleArea({ width: 10, height: 5 }));


// Q8. Return object keys

const student = {
    name: "Ram",
    age: 20,
    course: "BCA"
};

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log("Q8:", getObjectKeys(student));


// Q9. Merge two objects

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const obj1 = { name: "Ram" };
const obj2 = { age: 20 };

console.log("Q9:", mergeObjects(obj1, obj2));


// Q10. Sum using reduce()

const numbers3 = [10, 20, 30, 40, 50];

function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Q10:", calculateSum(numbers3));