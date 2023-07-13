function showVerticalMessage(str) {
    if (typeof str !== 'string') {
        console.log('Please enter a string!');
    } else {
        const newStr = str.split('').join('\n');
        let result = newStr[0].toUpperCase() + newStr.slice(1, 13);
        console.log(result);
    }
}

showVerticalMessage('strada');
showVerticalMessage('great frontend marathon');
showVerticalMessage(1234566);
