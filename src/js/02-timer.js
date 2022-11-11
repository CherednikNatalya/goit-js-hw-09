// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  myInput: document.querySelector("#datetime-picker"),
  timerRef: document.querySelector('.timer'), 
};


// let timerDeadline = null;

const timer ={
 intervalId: null,

 refs: {},

start(rootSelector, timerDeadline) {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      console.log(selectedDates[0]);
      timerDeadline = selectedDates[0].getTime();
      const delta = timerDeadline - Date.now();
      if (delta <= 0 ) {
        Notiflix.Notify.failure('Please choose a date in the future');
                refs.startBtn.disabled = true;
        return;
    } else {
      refs.startBtn.disabled = false;;
    }
},
  }

this.getRefs(rootSelector);

this.intervalId = setInterval(() => {
  const diff = timerDeadline - Date.now();

  if (diff <= 1000) {
    clearInterval(this.intervalId);
  }

  const data = this.convertMs(diff);
  
  this.refs.days.textContent = this.addLeadinZero(data.days);
  this.refs.hours.textContent = this.addLeadinZero(data.hours);
  this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
  this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
}, 1000);
  },

  getRefs(rootSelector) {
  
    this.refs.days = rootSelector.querySelector('.js-timer__days');
    this.refs.hours = rootSelector.querySelector('.js-timer__hours');
    this.refs.minutes = rootSelector.querySelector('.js-timer__minutes');
    this.refs.seconds = rootSelector.querySelector('.js-timer__seconds');
  },
  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },

  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};



// refs.startBtn.addEventListener ('click', () =>{
//   timer.start();
// });



