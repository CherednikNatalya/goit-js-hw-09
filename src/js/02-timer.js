// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  myInput: document.querySelector("#datetime-picker"),
  // clockface: document.querySelector('.timer'), 
  days: document.querySelector([data-days]), 
  hours: document.querySelector([data-hours]) ,
  minutes: document.querySelector([data-minutes]),
  seconds: document.querySelector([data-seconds]) ,
};

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
       const currentTime = Date.now();
       const deltaTime = currentTime - startTime;
       const timeComponents = convertMs(deltaTime)
       console.log(timeComponents);
    }, 1000);

  },
};
timer.start ()


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      let intervalId = null
      const currentTime = Date.now()

      if (selectedDates[0] < currentTime) {
        Notiflix.Notify.failure('Please choose a date in the future');
} 
// else(refs.startBtn.disabled = true)
intervalId = setInterval(() => {
  const inputTime = selectedDates[0].getTime() - Date.now();
  const time = convertMs(inputTime);

  if (inputTime < 0) {
    return;
  } else {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
  }
  if (time === 0) {
    clearInterval(intervalId);
  };
}, 1000);
   
    },
  };

  // 

  //     // Проверка если разница между текущей датой и выбранной меньше 0, то в textContent рефов присваивается 00
  //     if (inputTime < 0) {
  //       return;
  //     } else {
  //       const { days, hours, minutes, seconds } = time;
  //       refs.days.textContent = `${days}`;
  //       refs.hours.textContent = `${hours}`;
  //       refs.minutes.textContent = `${minutes}`;
  //       refs.seconds.textContent = `${seconds}`;
  //     }

  //     if (time === 0) {
  //       clearInterval(intervalId)
  //     }
  //   }, 1000);
  // },

flatpickr(refs.myInput, options);
     

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





// const timer = {
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//   },
// };

// // Переменная для опции в плагин

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   //   Функция вызывающая модалку ошибки выбра даты

//   onClose(selectedDates) {
//     let intervalId = null;
//     const currentTime = Date.now();

//     if (selectedDates[0] < currentTime) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//     }
//     intervalId = setInterval(() => {
//       const inputTime = selectedDates[0].getTime() - Date.now();

//       const time = convertMs(inputTime);

//       // Проверка если разница между текущей датой и выбранной меньше 0, то в textContent рефов присваивается 00
//       if (inputTime < 0) {
//         return;
//       } else {
//         const { days, hours, minutes, seconds } = time;
//         refs.days.textContent = `${days}`;
//         refs.hours.textContent = `${hours}`;
//         refs.minutes.textContent = `${minutes}`;
//         refs.seconds.textContent = `${seconds}`;
//       }

//       if (time === 0) {
//         clearInterval(intervalId);
//       }
//     }, 1000);
//   },
// };

// // Eventlistener on button start

// refs.btnStart.addEventListener('click', stratToCountBackTime);

// // Плагин выбора дня и времени
// flatpickr(inputDayTime, options);

// // Добавляет ноль перед цифрой, если его нет
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// // Возвращает объек из дней часов минут и секунд
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// // При нажатии кнопки старт начинаеться отсчет таймера
// function stratToCountBackTime() {
//   timer.start();
// }
