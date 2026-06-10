// Q1) Remove states starting with vowels
let states = ["UP", "AP", "Assam", "Bihar", "Odisha", "Kerala", "Uttarakhand"];

let filteredStates = states.filter(state => {
    let firstChar = state[0].toLowerCase();
    return !["a", "e", "i", "o", "u"].includes(firstChar);
});

console.log("Q1:", filteredStates);



// Q2) Reverse words in sentence
let str = "I love my India";

let reversed = str.split(" ").reverse().join(" ");
console.log("Q2:", reversed);



// Q3) INDIA → INDONESIA using splice
let arr = "INDIA".split("");

arr.splice(3, 1, "O", "N", "E", "S");

console.log("Q3:", arr.join("") + "IA");



// Q4) Count vowels and consonants
let text = "javascript is a very powerful language";

let vowels = "aeiou";
let vCount = 0;
let cCount = 0;

for (let char of text.toLowerCase()) {
    if (char >= "a" && char <= "z") {
        if (vowels.includes(char)) vCount++;
        else cCount++;
    }
}

console.log("Q4: Vowels =", vCount, "Consonants =", cCount);



// Q5) Replace wrong word
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

console.log("Q5:", correctfn("I love Anjda", "Anjda", "India"));



// Q6) Filter numbers > 5
let inputArr = [1,2,3,9,10,7,5,4,3];

let result = inputArr.filter(num => num > 5);

console.log("Q6:", result);



// Q7) Student average using map + reduce
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

let avgOutput = students.map(student => {
    let sum = student.scores.reduce((a, b) => a + b, 0);
    let avg = sum / student.scores.length;

    return { name: student.name, average: Math.round(avg) };
});

console.log("Q7:", avgOutput);



// Q8) Repeated digit sum
function singleDigitSum(num) {
    while (num > 9) {
        num = num.toString().split("").reduce((a, b) => a + Number(b), 0);
    }
    return num;
}

console.log("Q8:", singleDigitSum(456));



// Q9) Word count
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

console.log("Q9:", countWords("Hello I am learning JavaScript deeply"));



// Q10) Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Q10:", reverseString("Hello"));



// Q11) Average of subjects
let studentsData = [
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
];

let resultAvg = studentsData.map((student, index) => {
    let values = Object.values(student);
    let avg = values.reduce((a, b) => a + b, 0) / values.length;

    return {
        [`student${index + 1}`]: {
            average: Math.round(avg)
        }
    };
});

console.log("Q11:", resultAvg);