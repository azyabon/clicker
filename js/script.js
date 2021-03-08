let current = 0;
const clickButton = document.getElementById("clickrbutton");
const count = document.getElementById("count");
const TIMEOUT = 5000;
const DISPLAY = document.getElementById("display");


clickButton.onclick = start;


function start() {
    const startTime = Date.now();

    DISPLAY.textContent = TIMEOUT / 1000;

    clickButton.onclick = () => count.textContent = current++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        DISPLAY.textContent = Math.ceil((TIMEOUT - delta) / 1000);
    }, 100)

    const timeout = setTimeout(() => {
        clickButton.onclick = null;
        DISPLAY.textContent = "GAME OVER"

        clearTimeout(timeout);
        clearInterval(interval);
    }, TIMEOUT)
}