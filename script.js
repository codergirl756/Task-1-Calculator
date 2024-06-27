let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent += operator;
}

function calculate() {
    let currentOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(previousOperator) + 1));
    let result;
    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            result = previousOperand / currentOperand;
            break;
    }
    display.textContent = result;
}

function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
}