function calc(operator, firstNum, secondNum) {
    switch(operator) {
        case 'multy':
            return firstNum * secondNum;
        case 'add':
            return firstNum + secondNum;
        case 'sub':
            return firstNum - secondNum;
    }
}

console.log(calc('sub', 2, 3));
