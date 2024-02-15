const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const body = document.body;
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

      startButton.addEventListener("click", () => {
        timerId = setInterval(() => {
          body.style.backgroundColor = getRandomHexColor();
        }, 1000);
      });
      

     stopButton.addEventListener('click', function() {
        clearInterval(timerId);
     });