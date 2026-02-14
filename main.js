let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");
let operatorSelect = document.querySelector("#operator");
let resultDiv = document.querySelector(".result");
let submitButton = document.querySelector(".submit");

function calculator(num1, num2, operator) {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) return "Error: Division by zero";
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

submitButton.addEventListener("click", () => {
    let num1 = +num1Input.value;
    let num2 = +num2Input.value;
    let operator = operatorSelect.value;

    let result = calculator(num1, num2, operator);
    resultDiv.innerText = "Result is: " + result;
});