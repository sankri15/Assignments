function calculate(operation) {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    if (operation === "add") {
        result = a + b;
    } 
    else if (operation === "sub") {
        result = a - b;
    } 
    else if (operation === "mul") {
        result = a * b;
    } 
    else if (operation === "div") {

        if (b === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero";
            return;
        }

        result = a / b;
    }

    document.getElementById("result").innerText = "Result: " + result;
}