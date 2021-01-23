const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const defaultName = 'незнакомец';

inputRef.addEventListener('input', inputChange);

function inputChange(event) {
    const value = event.target.value;
    if (value) {
        spanRef.textContent = value;
    } else {
        spanRef.textContent = defaultName;
    }
}