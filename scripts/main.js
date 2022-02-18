$(document).ready(function () {

const blockbar = document.querySelector('.block-bar');
const menu = document.querySelector('.menu');
const backgroundmenu = document.querySelector('.menu .background');

blockbar.onclick = function() {
    menu.classList.add('ativo')    
}

backgroundmenu.onclick = function () {
    menu.classList.remove('ativo')
}


if ($('.owl-moveis')) {
    $('.owl-moveis').owlCarousel({
        items:3,
        loop:true,
        center:true,
        margin:30,
        dots: false,
        nav:true,
        stagePadding: 100,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            1024: {
                items: 2,
                margin: 20
            },
            1200: {
                items: 3,
                margin: 25
            }
        }
    })
}

if ($('.owl-moveis-2')) {
    $('.owl-moveis-2').owlCarousel({
        items:3,
        loop:true,
        center:true,
        margin:30,
        dots: false,
        nav:true,
        stagePadding: 100,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            1024: {
                items: 2,
                margin: 20
            },
            1200: {
                items: 3,
                margin: 25
            }
        }
    })
}

if ($('.owl-depoimentos')) {
    $('.owl-depoimentos').owlCarousel({
        items: 3,
        loop: true,
        margin:30,
        nav:true,
        dots:false,
        center:true,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='25' height='36' viewBox='0 0 25 36'><g><g transform='rotate(-180 13.5 18)'><g><path fill='none' stroke-miterlimit='20' stroke-width='4' d='M3.231 34v0l20-16v0l-20-16v0'/></g></g></g></svg>", "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='36' viewBox='0 0 25 36'><g><g><path fill='none' stroke-miterlimit='20' stroke-width='4' d='M1.769 34v0l20-16v0l-20-16v0'/></g></g></svg>"],
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            768: {
                items: 2,
                margin: 15
            },
            1024: {
                items: 3,
                margin: 30
            }
        }
    
    
    })
}

if ($(".cep-mask").length > 0) {
    $(".cep-mask").mask('99.999-999');
}

if ($(".date-mask").length > 0) {
    $(".date-mask").mask('99/99/9999');
}

if ($(".number-mask").length > 0) {
    $(".number-mask").mask('99999');
}

if ($(".cvv-mask").length > 0) {
    $(".cvv-mask").mask('999');
}

if ($(".cpf-mask").length > 0) {
    $(".cpf-mask").mask('999.999.999-99');
}

if ($(".phone-mask").length > 0) {
    $('.phone-mask').mask(SPMaskBehavior, spOptions);
}

});