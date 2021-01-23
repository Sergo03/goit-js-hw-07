const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', check);

function validate(str) {
    return str.length >= inputRef.dataset.length;
}

function check(e){
    const value  = e.target.value;
    if (validate(value)) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
}

inputRef.addEventListener('focus', e => {
    e.target.classList.remove('invalid','valid')
})