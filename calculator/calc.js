const UI_ELEMENTS = {
    operator: document.querySelector('.calc__operator'),
    firstNum: document.querySelector('.first-num'),
    secondNum: document.querySelector('.second-num'),
    calcBtn: document.querySelector('.calc__btn'),
    result: document.querySelector('.calc__result'),
}

const ERROR_MESSAGES = {
    WRONG_DIV: 'You can\'t divide by zero!',
    WRONG_INPUT: 'I calculate only numbers!',
}

const OPERATIONS = {
    ADD: '+',
    MULTY: '*',
    SUB: '-',
    DIV: '/',
}

function calc(operator, firstNum, secondNum) {

    switch(operator) {
        case OPERATIONS.MULTY:
            return firstNum * secondNum;
        case OPERATIONS.ADD:
            return firstNum + secondNum;
        case OPERATIONS.SUB:
            return firstNum - secondNum;
        case OPERATIONS.DIV:
            return firstNum / secondNum;
        default: break;
    }
}

function getCalcResult() {
    const num1 = Number(UI_ELEMENTS.firstNum.value);
    const num2 = Number(UI_ELEMENTS.secondNum.value);
    let result = calc(UI_ELEMENTS.operator.value, num1, num2);

    if (num2 === 0 && UI_ELEMENTS.operator.value === '/') {
        return ERROR_MESSAGES.WRONG_DIV;
    } else if (num2 === 0 && UI_ELEMENTS.operator.value === '*') {
        return 1;
    } else if (isNaN(num1) || isNaN(num2)) {
        return ERROR_MESSAGES.WRONG_INPUT;
    } else {
        return result.toFixed(2);
    }
}

UI_ELEMENTS.calcBtn.addEventListener('click', function run() {
    UI_ELEMENTS.result.textContent = getCalcResult();
});
