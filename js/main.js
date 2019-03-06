const icoBurger = document.querySelector('.burger');
const icoClose = document.querySelector('.close');
const mobileUl = document.querySelector('ul');
const ulContainer = document.querySelector('.ulContainer');
const header = document.querySelector('header');
const about = document.querySelector('.about')
const phone = document.querySelector('.fa-mobile-alt');
const phoneNumber = document.querySelector('.number');
const mail = document.querySelector('.fa-envelope');
const showMail = document.querySelector('.mail');


//Rozwijanie i zwijanie menu na mobile
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


//Przezroczystość menu
window.addEventListener('scroll', function () {
    // console.log(this.scrollY)
    // console.log(header.offsetHeight)
    if (this.scrollY > header.offsetHeight - ulContainer.offsetHeight) {
        ulContainer.classList.add('menuOpacity');
    } else {
        ulContainer.classList.remove('menuOpacity');
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
        'scrollTop': target.offset().top
    }, 1000, 'swing');
});

//Animowane pokazywanie się i znikanie sekcji strony
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