//Pobranie potrzebnych elementów DOM
const icoBurger = document.querySelector('.burger');
const icoClose = document.querySelector('.close');
const mobileUl = document.querySelector('ul');
const ulContainer = document.querySelector('.ulContainer');
const header = document.querySelector('header');
const about = document.querySelector('.about');
const image = document.querySelector('.image');
const description = document.querySelector('.description')
const phone = document.querySelector('.fa-mobile-alt');
const phoneNumber = document.querySelector('.number');
const mail = document.querySelector('.fa-envelope');
const showMail = document.querySelector('.mail');
const skills = document.querySelector('.skills');

const navButtons = [...document.querySelectorAll('.menuButton')];

//Rozwijanie i zwijanie menu na mobile
icoBurger.addEventListener('click', function () {
    this.classList.remove('show');
    icoClose.classList.add('show');
    ulContainer.classList.add('show');
    ulContainer.classList.add('menuMobile');
})

icoClose.addEventListener('click', function () {
    this.classList.remove('show');
    icoBurger.classList.add('show');
    ulContainer.classList.remove('show');
})

//Automatyczne zamykanie się menu przy kliku w button
navButtons.forEach(el => {
    el.addEventListener('click',
        function () {
            icoBurger.classList.add('show');
            icoClose.classList.remove('show');
            ulContainer.classList.remove('show');
        })
})

//Ikonka menu zmienia kolor
window.addEventListener('scroll', function () {
    if (this.scrollY < header.offsetHeight - ulContainer.offsetHeight) {
        icoBurger.style.color = "#fff"
    } else if (this.scrollY > header.offsetHeight && this.scrollY < description.offsetTop) {
        icoBurger.style.color = "#111"
    } else if (this.scrollY > description.offsetTop && this.scrollY < skills.offsetTop) {
        icoBurger.style.color = "#fff"
    } else if (this.scrollY > skills.offsetTop && this.scrollY < skills.offsetTop + skills.offsetHeight) {
        icoBurger.style.color = "#111"
    } else {
        icoBurger.style.color = "#fff"
    }
})

//Przezroczystość menu
window.addEventListener('scroll', function () {
    if (this.scrollY < header.offsetHeight - ulContainer.offsetHeight) {
        ulContainer.classList.remove('menuOpacity');
    } else if (this.scrollY > header.offsetHeight - ulContainer.offsetHeight) {
        ulContainer.classList.add('menuOpacity');
    }
})

// Pokazuje się numer telefonu i adres e-mail
phone.addEventListener('click', function () {
    phoneNumber.classList.toggle('showNumber');
})

mail.addEventListener('click', function () {
    showMail.classList.toggle('showNumber');
})

//Scrollowanie do odpowiedniej sekcji
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $(this.hash);

    $('html, body').animate({
        'scrollTop': (target.offset().top - ulContainer.offsetHeight)
    }, 1000, 'swing');
});

//Animowane pojawianie się sekcji strony
$(document).ready(function () {
    $('*[data-animate]').addClass('hide').each(function () {
        $(this).viewportChecker({
            classToAdd: 'exhibit animated ' + $(this).data('animate'),
            classToRemove: 'hide',
            offset: '30%'
        });
    });
});

// ładowanie się pasków z postępem
const showLoading = [...document.querySelectorAll('.show-loading')]

window.addEventListener('scroll', function () {
    if (this.scrollY > skills.offsetHeight) {
        showLoading.forEach(el => {
            el.style.left = "-5px";
        })
    }
})