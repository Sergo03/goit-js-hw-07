const valueRef = document.querySelector('#value');
const decRef = document.querySelector('button[data-action="decrement"]');
const incRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function decrement() {
    counterValue -= 1; 
    valueRef.textContent = counterValue;
}

function increment() {
    counterValue += 1; 
    valueRef.textContent = counterValue;
}

decRef.addEventListener('click', decrement);

incRef.addEventListener('click', increment)
