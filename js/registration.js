let menuReg = document.querySelector('.registration');
let closeButtonReg = document.querySelector('.registration__close');
let openButtonReg = document.querySelectorAll('.registration__open');

closeButtonReg.addEventListener('click', closeReg);
openButtonReg.forEach(el => {
    el.addEventListener('click', openReg);
});

function closeReg() {
    menuReg.style.display = 'none';
}

function openReg() {
    menuReg.style.display = 'block';
    menuLog.style.display = 'none';
}

let menuLog = document.querySelector('.login');
let closeButtonLog = document.querySelector('.login__close');
let openButtonLog = document.querySelector('.login__open');

closeButtonLog.addEventListener('click', closeLog);
openButtonLog.addEventListener('click', openLog);

function closeLog() {
    menuLog.style.display = 'none';
    menuReg.style.display = 'none';
}

function openLog() {
    menuLog.style.display = 'block';
    menuReg.style.display = 'none';
}