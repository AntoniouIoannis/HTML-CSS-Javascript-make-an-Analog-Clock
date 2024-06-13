const secPointer = document.getElementById('second-pointer');
const minPointer = document.getElementById('minute-pointer');
const hourPointer = document.getElementById('hour-pointer');

function clockTickTock() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockPointer(secPointer, seconds);
    rotateClockPointer(minPointer, minutes);
    rotateClockPointer(hourPointer, hours);
}

function rotateClockPointer(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTickTock, 1000);

