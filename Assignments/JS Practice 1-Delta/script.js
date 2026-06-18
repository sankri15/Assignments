// helper
function addQA(question, answer) {
    document.getElementById("container").innerHTML += `
        <div class="box">
            <div class="question">${question}</div>
            <div class="answer">Ans: ${JSON.stringify(answer, null, 2)}</div>
        </div>
    `;
}


// Q1
function scopeExample() {
    var a = "var is function scoped";
    let b = "let is block scoped";
    const c = "const is block scoped";
    return { a, b, c };
}

addQA(
"Q1) Difference between var, let, const",
scopeExample()
);


// Q2
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
    return arr[1];
}

addQA(
"Q2) Return second fruit from array",
getSecondFruit(fruits)
);


// Q3
function modifyArray(arr, element) {
    arr.push(element);
    arr.pop();
    return arr;
}

addQA(
"Q3) push and pop on array",
modifyArray([1,2,3,4], 5)
);


// Q4
let numbers = [1,2,3,4,5];

function squareNumbers(arr) {
    return arr.map(n => n * n);
}

addQA(
"Q4) Square numbers using map",
squareNumbers(numbers)
);


// Q5
function getOddNumbers(arr) {
    return arr.filter(n => n % 2 !== 0);
}

addQA(
"Q5) Filter even numbers out",
getOddNumbers([1,2,3,4,5,6,7,8])
);


// Q6
let person = {
    name: "Sanjana",
    age: 21,
    occupation: "Student"
};

function greet(obj) {
    return `Hello ${obj.name}, Age ${obj.age}, Job ${obj.occupation}`;
}

addQA(
"Q6) Person greeting object",
greet(person)
);


// Q7
function areaRectangle(obj) {
    return obj.width * obj.height;
}

addQA(
"Q7) Area of rectangle",
areaRectangle({width:10, height:5})
);


// Q8
function getKeys(obj) {
    return Object.keys(obj);
}

addQA(
"Q8) Object keys using Object.keys()",
getKeys({a:1, b:2, c:3})
);


// Q9
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

addQA(
"Q9) Merge two objects",
mergeObjects({name:"Ram"}, {age:20})
);


// Q10
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

addQA(
"Q10) Sum using reduce",
sumArray([10,20,30,40,50])
);
    



