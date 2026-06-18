// helper
function addQA(question, answer) {
    document.getElementById("container").innerHTML += `
        <div class="box">
            <div class="question">${question}</div>
            <div class="answer">Ans: ${JSON.stringify(answer, null, 2)}</div>
        </div>
    `;
}


// Q1) Even numbers from 1 to 100
let evenNumbers = [];

for(let i=1;i<=100;i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    }
}

addQA(
"Q1) Display numbers from 1 to 100 but only even numbers",
evenNumbers
);


// Q2) Calculator using switch
function calculator(a, b, op){
    let result;

    switch(op){
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

        default:
            result = "Invalid operator";
    }

    return result;
}

addQA(
"Q2) Calculator using switch (add, subtract, multiply, divide)",
{
    "10 + 5": calculator(10,5,"+"),
    "10 - 5": calculator(10,5,"-"),
    "10 * 5": calculator(10,5,"*"),
    "10 / 5": calculator(10,5,"/")
}
);


// Q3) Tax calculation using switch
function findTax(salary){
    let tax;

    switch(true){
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            tax = "Invalid salary";
    }

    return tax;
}

addQA(
"Q3) Find tax using switch case",
{
    "Salary 400000": findTax(400000),
    "Salary 800000": findTax(800000),
    "Salary 1200000": findTax(1200000),
    "Salary 2000000": findTax(2000000)
}
);


// Q4) Sum of products of corresponding digits
function sumOfProducts(n1, n2){
    let s1 = n1.toString().split("").reverse();
    let s2 = n2.toString().split("").reverse();

    let len = Math.max(s1.length, s2.length);

    let sum = 0;

    for(let i=0;i<len;i++){
        let digit1 = parseInt(s1[i]) || 0;
        let digit2 = parseInt(s2[i]) || 0;

        sum += digit1 * digit2;
    }

    return sum;
}

addQA(
"Q4) Sum of products of corresponding digits",
{
    "6 & 34": sumOfProducts(6,34),
    "123 & 45": sumOfProducts(123,45)
}
);
