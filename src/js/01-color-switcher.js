import throttle from "lodash.throttle";


const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const body = document.body;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

     const changeColor = throttle(function() {
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);

      startButton.addEventListener("click", function(){
        time = setInterval(changeColor, 1000);
      });



     stopButton.addEventListener('click', function() {
        clearInterval(time);
     });
