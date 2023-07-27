function calc(operator, firstNum, secondNum) {

    let result;

    switch(operator) {
        case 'multy':
            result = firstNum * secondNum;
        case 'add':
            result = firstNum + secondNum;
        case 'sub':
            result = firstNum - secondNum;
    }

    return result;
}

const calcBtn = document.querySelector('.calc__btn');

calcBtn.addEventListener('click', () => {console.log('Heeey!');});
