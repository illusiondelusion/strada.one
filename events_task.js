const timer = document.querySelector('.timer');

let time = 0;
let isPaused = false;
let timerId = null;

function ticktack() {
    timerId = setInterval(() => {console.log(++time);}, 1000);
}

function stopTicktack() {
    clearInterval(timerId);
}

function handleClick() {
    if (!isPaused) {
        ticktack();
    } else {
        stopTicktack();
    }
    isPaused = !isPaused;
}

timer.addEventListener('click', handleClick);