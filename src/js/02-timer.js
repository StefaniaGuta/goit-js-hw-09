import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTimeSelector = document.getElementById("datetime-picker");
const startBtn = document.querySelector("[data-start]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

startBtn.disabled = true;
let intervalId = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectDate = selectedDates[0];
        if (selectDate < new Date()) {
            Notiflix.Notify.failure("Please choose a date in the future")
        } else {
            startBtn.disabled = false;
        }
    }
};

flatpickr(dateTimeSelector, options);

function startTimer() {
    const selDate = new Date(dateTimeSelector.value).getTime();
    const currentDate = new Date().getTime();
    const deltaTime = selDate - currentDate;
    
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
}

startBtn.addEventListener("click", e => {
    intervalId = setInterval(startTimer, 1000);
    startBtn.disabled = true;
    dateTimeSelector.disabled = true;
});

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
        
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        
    return { days, hours, minutes, seconds };
}
    
       
   






       


