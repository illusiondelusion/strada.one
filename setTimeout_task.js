function countdown(time) {
    function timer() {
        console.log(`${time--} seconds left!`);
    }

    let timerId = setInterval(timer, 1000);
    let finishTime = time * 1000 + 1000;

    setTimeout(() => {clearInterval(timerId); console.log('Time is out!');}, finishTime);

}

countdown(5);