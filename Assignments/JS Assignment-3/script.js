// helper to print Q + A
function addQA(question, answer) {
    document.getElementById("container").innerHTML += `
        <div class="box">
            <div class="question">${question}</div>
            <div class="answer">Ans: ${JSON.stringify(answer, null, 2)}</div>
        </div>
    `;
}


// Q1
let states = ["UP","AP","Assam","Bihar","Odisha","Kerala","Uttarakhand"];
let q1 = states.filter(s => !["a","e","i","o","u"].includes(s[0].toLowerCase()));

addQA("Q1) Remove states starting with vowels", q1);


// Q2
let str = "I love my India";
addQA("Q2) Reverse words in sentence", str.split(" ").reverse().join(" "));


// Q3
let arr = "INDIA".split("");
arr.splice(3,1,"O","N","E","S");

addQA("Q3) INDIA → INDONESIA using splice", arr.join("") + "IA");


// Q4
let text = "javascript is a very powerful language";
let vowels = "aeiou";
let v=0,c=0;

for(let ch of text.toLowerCase()){
    if(ch>="a" && ch<="z"){
        if(vowels.includes(ch)) v++;
        else c++;
    }
}

addQA("Q4) Count vowels and consonants", {vowels:v, consonants:c});


// Q5
function correctfn(str, wrong, correct){
    return str.replace(wrong, correct);
}

addQA("Q5) Replace wrong word", correctfn("I love Anjda","Anjda","India"));


// Q6
let inputArr = [1,2,3,9,10,7,5,4,3];
addQA("Q6) Filter numbers > 5", inputArr.filter(n => n>5));


// Q7
const students = [
{ name:"Ram", scores:[80,70,60] },
{ name:"Mohan", scores:[80,70,90] },
{ name:"Sai", scores:[60,70,80] },
{ name:"Hemang", scores:[90,90,80,80] }
];

let q7 = students.map(s=>{
    let sum = s.scores.reduce((a,b)=>a+b,0);
    return {name:s.name, avg:Math.round(sum/s.scores.length)};
});

addQA("Q7) Student average using map + reduce", q7);


// Q8
function singleDigitSum(num){
    while(num>9){
        num = num.toString().split("").reduce((a,b)=>a+Number(b),0);
    }
    return num;
}

addQA("Q8) Repeated digit sum", singleDigitSum(456));


// Q9
function countWords(str){
    return str.trim().split(/\s+/).length;
}

addQA("Q9) Word count", countWords("Hello I am learning JavaScript deeply"));


// Q10
function reverseString(str){
    return str.split("").reverse().join("");
}

addQA("Q10) Reverse string", reverseString("Hello"));


// Q11
let studentsData = [
{subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
{subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
{subject1:44,subject2:56,subject3:87,subject4:97,subject5:37}
];

let q11 = studentsData.map(s=>{
    let values = Object.values(s);
    return {avg:Math.round(values.reduce((a,b)=>a+b,0)/values.length)};
});

addQA("Q11) Average of subjects", q11);
