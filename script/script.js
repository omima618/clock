var secondsHand = document.querySelector('.sec-hand');
var minutesHand = document.querySelector('.min-hand');
var hoursHand = document.querySelector('.hour-hand');

function clockHandler() {
    var currentTime = new Date();
    var secondsDeg = currentTime.getSeconds() / 60;
    secondsHand.style.transform = `rotate(${secondsDeg * 360 + 90}deg)`;
    var minutesDeg = (secondsDeg + currentTime.getMinutes()) / 60;
    minutesHand.style.transform = `rotate(${minutesDeg * 360 + 90}deg)`;
    var hoursDeg = (minutesDeg + currentTime.getHours()) / 12;
    hoursHand.style.transform = `rotate(${hoursDeg * 360 + 90}deg)`;
}

clockHandler();
setInterval(clockHandler, 1000);
