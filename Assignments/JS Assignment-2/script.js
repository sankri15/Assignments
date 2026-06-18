// 1. Display even numbers from 1 to 100
function printEvenNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers();


// 2. Calculator using switch
function calculator(n1, n2, operator) {
    switch (operator) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));


// 3. Tax calculation using switch
function findTax(salary) {
    let tax = 0;

    switch (true) {
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

console.log(findTax(750000));


// 4. Sum of products of corresponding digits
function sumOfProducts(n1, n2) {
    let s1 = n1.toString().split("").reverse();
    let s2 = n2.toString().split("").reverse();

    let len = Math.max(s1.length, s2.length);
    let sum = 0;

    for (let i = 0; i < len; i++) {
        let d1 = parseInt(s1[i] || 0);
        let d2 = parseInt(s2[i] || 0);
        sum += d1 * d2;
    }

    return sum;
}

console.log(sumOfProducts(6, 34));
