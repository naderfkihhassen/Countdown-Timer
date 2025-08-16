let hours = 12;
let minutes = 32;
let seconds = 11;

function updateCountdown() {
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        seconds = 59;
        minutes--;
    } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
    }
    
}

setInterval(updateCountdown, 1000);

updateCountdown();