$(document).ready(function () {


if ($('.owl-imoveis')) {
    $('.owl-imoveis').owlCarousel({
        items:1,
        autoHeight:true,
        nav:true,  
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