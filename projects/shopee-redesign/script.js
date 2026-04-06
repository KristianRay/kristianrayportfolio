document.addEventListener('DOMContentLoaded', function() {
    // Flash Sale Countdown Timer
    function startFlashSaleTimer(duration, display) {
        let timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // Format as separate boxes
            display.innerHTML = `
                <span class="p-1">${hours}</span>:<span class="p-1">${minutes}</span>:<span class="p-1">${seconds}</span>
            `;

            if (--timer < 0) {
                // Timer resets for demonstration purposes
                timer = duration;
            }
        }, 1000);
    }

    const flashSaleDisplay = document.querySelector('#flash-sale-timer');
    if (flashSaleDisplay) {
        const twoHours = 60 * 60 * 2;
        startFlashSaleTimer(twoHours, flashSaleDisplay);
    }
});