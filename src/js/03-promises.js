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
let position = 0;
const amount = refs.amountRef.value;
console.log(amount);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    for (let position = 1; position <= amountValue; position += 1) {
      setTimeout(() => {
        console.log(position, delayValue, stepValue, amountValue);
        setTimeout(() => {
          createPromise(position, delayValue + stepValue * position)
            .then(res => onSuccess(res.position, res.delay))
            .catch(error => onReject(error.position, error.delay));
        }, delayValue);
      }, stepValue);
    }


    position +=1
    const delay = refs.delayRef.value + refs.stepRef.value
    console.log(delay);

  });
}


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
  })
  .catch(({ position, delay }) => {
    console.log(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
  });






  // создаю event.рreventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  console.log(delayValue, stepValue, amountValue);
  for (let position = 1; position <= amountValue; position += 1) {
    setTimeout(() => {
      console.log(position, delayValue, stepValue, amountValue);
      setTimeout(() => {
        createPromise(position, delayValue + stepValue * position)
          .then(res => onSuccess(res.position, res.delay))
          .catch(error => onReject(error.position, error.delay));
      }, delayValue);
    }, stepValue);
  }