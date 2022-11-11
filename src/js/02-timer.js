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


let timerDeadline = null;

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
        // refs.startBtn.setAttribute('disable', false);
        refs.startBtn.disabled = true;
        return;
    } else {
      refs.startBtn.disabled = false;;
    }
},
};
console.log(options.onClose);

flatpickr(refs.myInput, options);

refs.startBtn.addEventListener ('click', () =>{
  timer.start();
});

const timer ={
 intervalId: null,

refs : {
  // days: document.querySelector('[data-days]'), 
  // hours: document.querySelector('[data-hours]'),
  // minutes: document.querySelector('[data-minutes]'),
  // seconds: document.querySelector('[data-seconds]') ,
},

start(rootSelector, timerDeadline) {

  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  };


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
  


},

// console.log(Date.now());
// console.log(rootSelector);
// console.log(delta);

  // const timeDeadline = new Date();
  // this.intervalId = setInterval(() => {
  //   const startTime = timeDeadline - Date.now();
  //   const timeComponents = convertMs(startTime)

  //   const time = convertMs(inputTime);
  
  //   if (inputTime < 0) {
  //     return;
  //   } else {
  //     refs.days.textContent = `${days}`;
  //     refs.hours.textContent = `${hours}`;
  //     refs.minutes.textContent = `${minutes}`;
  //     refs.seconds.textContent = `${seconds}`;
  //   }
  //   if (time === 0) {
  //     clearInterval(intervalId);
  //   };
  // }, 1000);

};


timer.start(refs.timerRef, timerDeadline)



function updateClockface({ days, hours, minutes, seconds}) {
  refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}









// refs.startBtn.addEventListener ('click', () =>{
//   timer.start();
// });


// const timer = {
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//   },
// };



// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//        const currentTime = Date.now();
//        const deltaTime = currentTime - startTime;
//        const timeComponents = convertMs(deltaTime)
//       //  console.log(timeComponents);
//       const time = updateClockface
       
//     }, 1000);

//   },
// };
// timer.start ()
// else(refs.startBtn.disabled = true)

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,

//     // onClose(selectedDates) {
//     //   console.log(selectedDates[0]);
//     //   numberSelectedDates = selectedDates[0].getTime();


//     onClose(selectedDates) {
//       let intervalId = null
//       const currentTime = Date.now()

//       if (selectedDates[0] < currentTime) {
//         Notiflix.Notify.failure('Please choose a date in the future');
// } 

// intervalId = setInterval(() => {
//   const inputTime = selectedDates[0].getTime() - Date.now();
//   const time = convertMs(inputTime);

//   if (inputTime < 0) {
//     return;
//   } else {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.minutes.textContent = `${minutes}`;
//     refs.seconds.textContent = `${seconds}`;
//   }
//   if (time === 0) {
//     clearInterval(intervalId);
//   };
// }, 1000);
   
//     },
//   };

// flatpickr(refs.myInput, options);
     

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function updateClockface({ days, hours, minutes, seconds}) {
//   refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
// }



// let timerId = setInterval(() => {
//   const currentTime = Date.now();
//   //console.log('currentTime', currentTime);
//   const deltaTime = startTime - currentTime;
//   //console.log('deltaTime',deltaTime);
//   const time = convertMs(deltaTime);
//   refs.days.textContent = time.days;
//   refs.hours.textContent = time.hours;
//   refs.minutes.textContent = time.minutes;
//   refs.seconds.textContent = time.seconds;
//   if (deltaTime <= 0) {
//     clearInterval(timerId);
//     return;
//   }
// }, 1000);

// refs.startBtn.addEventListener('click', onStart);
// function onStart() {
//   refs.startBtn.disabled = true;
//   const startTime = dataPickr.selectedDates[0];
//   //console.log('startTime',startTime);
//   let timerId = setInterval(() => {
//     const currentTime = Date.now();
//     //console.log('currentTime', currentTime);
//     const deltaTime = startTime - currentTime;
//     //console.log('deltaTime',deltaTime);
//     const time = convertMs(deltaTime);
//     refs.days.textContent = time.days;
//     refs.hours.textContent = time.hours;
//     refs.minutes.textContent = time.minutes;
//     refs.seconds.textContent = time.seconds;
//     if (deltaTime <= 0) {
//       clearInterval(timerId);
//       return;
//     }
//   }, 1000);
// function addPrevSymbol(value) {
//   return String(value).padStart(2, '0');
// }