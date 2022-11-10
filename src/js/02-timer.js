// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  myInput: document.querySelector("#datetime-picker"),
  clockface: document.querySelector('.timer') 
};

// console.log(refs.clockface);
// const currentTime = Date.now()
// const q = selectedDates
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(q[0]);
    },
  };

 
console.log(options.onClose(selectedDates[0]));

flatpickr(refs.myInput, options);
     
// if (currentTime<startTime){
//   window.alert("Please choose a date in the future")
// } else(refs.startBtn.disabled = true)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateClockface({ days, hours, minutes, seconds}) {
  refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}


function renderingTime() {  const delta = selecktedTime - new Date();  
  const { days, hours, minutes, seconds } = convertMs(delta);  
  if (seconds < 0) 
  { return;}
  getEl('[data-days]').textContent = days;
    getEl('[data-hours]').textContent = hours;
      getEl('[data-minutes]').textContent = minutes;
        getEl('[data-seconds]').textContent = seconds;}

// currentTime  = Date.now
// currentTime-startTime >=0


  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  // pad(value) {
  //   return String(value).padStart(2, '0');
  // }


  // const refs = {
  //   startBtn: document.querySelector('button[data-action-start]'),
  //   stopBtn: document.querySelector('button[data-action-stop]'),
  //   clockface: document.querySelector('.js-clockface'),
  // };
  
  // class Timer {
  //   constructor({ onTick }) {
  //     this.intervalId = null;
  //     this.isActive = false;
  //     this.onTick = onTick;
  
  //     this.init();
  //   }
  
  //   init() {
  //     const time = this.getTimeComponents(0);
  //     this.onTick(time);
  //   }
  
  //   start() {
  //     if (this.isActive) {
  //       return;
  //     }
  
  //     const startTime = Date.now();
  //     this.isActive = true;
  
  //     this.intervalId = setInterval(() => {
  //       const currentTime = Date.now();
  //       const deltaTime = currentTime - startTime;
  //       const time = this.getTimeComponents(deltaTime);
  
  //       this.onTick(time);
  //     }, 1000);
  //   }
  
  //   stop() {
  //     clearInterval(this.intervalId);
  //     this.isActive = false;
  //     const time = this.getTimeComponents(0);
  //     this.onTick(time);
  //   }
  
  //   /*
  //    * - Принимает время в миллисекундах
  //    * - Высчитывает сколько в них вмещается часов/минут/секунд
  //    * - Возвращает обьект со свойствами hours, mins, secs
  //    * - Адская копипаста со стека 💩
  //    */
  //   getTimeComponents(time) {
  //     const hours = this.pad(
  //       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //     );
  //     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
  //     return { hours, mins, secs };
  //   }
  
  //   /*
  //    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
  //    */
  //   pad(value) {
  //     return String(value).padStart(2, '0');
  //   }
  // }
  
  // const timer = new Timer({
  //   onTick: updateClockface,
  // });
  
  // refs.startBtn.addEventListener('click', timer.start.bind(timer));
  // refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
  
  // /*
  //  * - Принимает время в миллисекундах
  //  * - Высчитывает сколько в них вмещается часов/минут/секунд
  //  * - Рисует интерфейс
  //  */
  // function updateClockface({ hours, mins, secs }) {
  //   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
  // }
  