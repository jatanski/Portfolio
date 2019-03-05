const icoBurger = document.querySelector('.burger');
const icoClose = document.querySelector('.close');
const mobileUl = document.querySelector('ul');
const ulContainer = document.querySelector('.ulContainer');
const header = document.querySelector('header');
const phone = document.querySelector('.fa-mobile-alt');
const phoneNumber = document.querySelector('.number');
const mail = document.querySelector('.fa-envelope');
const showMail = document.querySelector('.mail')

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

window.addEventListener('scroll', function () {
    console.log(this.scrollY)
    console.log(header.offsetHeight)
    if (this.scrollY > header.offsetHeight - ulContainer.offsetHeight) {
        ulContainer.classList.add('menuOpacity');
    } else {
        ulContainer.classList.remove('menuOpacity');
    }
})
phone.addEventListener('click', function () {
    phoneNumber.classList.toggle('showNumber');
})

mail.addEventListener('click', function () {
    showMail.classList.toggle('showNumber');
})