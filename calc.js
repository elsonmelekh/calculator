let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.op');
let equal = document.querySelector('.equal');
let previous = document.querySelector('.previous');
let current = document.querySelector('.current');
let clear = document.querySelector('.clear');
let negate = document.querySelector('.negate');
let decimal = document.querySelector('.decimal');

let currentValue = '';
let op = '';
let previousValue = '';

numbers.forEach((number) => {
    number.addEventListener('click', numClick);
});

negate.addEventListener('click', negateNum);

operators.forEach((operator) => {
    operator.addEventListener('click', opClick);
});

equal.addEventListener('click', calculate);

function numClick(e) {
    currentValue += e.target.textContent;
    current.textContent = currentValue;
}

decimal.addEventListener('click', addDecimal);

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += decimal.textContent;
    }
}

function opClick(e) {
    op = e.target.textContent;
    previousValue = currentValue;
    previous.textContent = previousValue + ' ' + op;
    currentValue = '';
    current.textContent = currentValue;
}

clear.addEventListener('click', clearCalc);

function clearCalc() {
    current.textContent = '';
    previous.textContent = '';
    currentValue = '';
    previousValue = '';
    op = '';
}

function negateNum() {
    if (currentValue === '') {
        return;
    } else {
        currentValue = (parseFloat(currentValue) * -1).toString();
        current.textContent = currentValue;
    }
}

function calculate() {
    currentValue = Number(currentValue);
    previousValue = Number(previousValue);

    switch (op) {
        case '+':
            previousValue += currentValue;
            break;
        case '*':
            previousValue *= currentValue;
            break;
        case '/':
            previousValue /= currentValue;
            break;
        case '-':
            previousValue -= currentValue;
            break;
        default:
            break;
    }
    
    previous.textContent = '';
    current.textContent = previousValue;
    currentValue = previousValue.toString();
    op = '';
}


















