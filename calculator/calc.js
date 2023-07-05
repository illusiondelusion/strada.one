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

console.log(calc('sub', 2, 3));
