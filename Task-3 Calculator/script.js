let buttons = Array.from(document.getElementsByTagName("button"));
let display = document.getElementById("result");
let clear = document.getElementById("clear");
let operator = null;
let operand1 = null;
let operand2 = null;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (!isNaN(value) || value === '.') {
            display.innerText += value;
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            operand1 = parseFloat(display.innerText);
            display.innerText = '';
        } else if (value === '=') {
            operand2 = parseFloat(display.innerText);
            switch (operator) {
                case '+':
                    display.innerText = operand1 + operand2;
                    break;
                case '-':
                    display.innerText = operand1 - operand2;
                    break;
                case '*':
                    display.innerText = operand1 * operand2;
                    break;
                case '/':
                    display.innerText = operand1 / operand2;
                    break;
            }
            operator = null;
            operand1 = null;
            operand2 = null;
        }
    })
});

clear.addEventListener('click', () => {
    display.innerText = '';
    operator = null;
    operand1 = null;
    operand2 = null;
});