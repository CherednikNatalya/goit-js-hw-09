import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form'),
  delayRef: document.querySelector('input[name=delay]'),
  stepRef: document.querySelector("input[name=step]"),
  amountRef: document.querySelector('input[name=amount]'), 
};

console.log(refs.form);
refs.form.addEventListener('submit', createPromise)

let startDelay = null;
let position = 0
const amount  = refs.amountRef.value
console.log(amount);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
    } else {
      Notiflix.Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
    }  
  });


}






