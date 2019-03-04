const icoBurger = document.querySelector('.burger');
const icoClose = document.querySelector('.close');
const mobileUl = document.querySelector('ul');
const header = document.querySelector('header')

icoBurger.addEventListener('click', function () {
    this.classList.add('show');
    icoClose.classList.remove('show');
    mobileUl.classList.remove('show');
    header.style.minHeight = "80vh"
})

icoClose.addEventListener('click', function () {
    this.classList.add('show');
    icoBurger.classList.remove('show');
    mobileUl.classList.add('show');
    header.style.minHeight = "90vh"
})