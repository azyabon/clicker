let current = 0;
const clickButton = document.getElementById("clickrbutton");
const count = document.getElementById("count");
const TIMEOUT = 5000;
const DISPLAY = document.getElementById("display");
const BEST = document.getElementById("best");


clickButton.onclick = start;

localStorage.getItem("result") ? 0 : localStorage.setItem("result", "0");

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
        DISPLAY.textContent = "GAME OVER";

        if ((+localStorage.getItem("result")) < (+count.textContent)) {
            localStorage.setItem("result", count.textContent);
        }

        clearTimeout(timeout);
        clearInterval(interval);
    }, TIMEOUT)
}

BEST.textContent = `Best result: ${localStorage.getItem("result")}`;
