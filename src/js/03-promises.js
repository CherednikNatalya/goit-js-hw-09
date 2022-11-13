import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form'),
  delayRef: document.querySelector('#delay'),
  stepRef: document.querySelector("#step"),
  amountRef: document.querySelector('#amount'), 
};

refs.form.addEventListener('submit', createPromise)

let delay = null;
let position = 0


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
  } else {
    Notiflix.Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
  }
}





