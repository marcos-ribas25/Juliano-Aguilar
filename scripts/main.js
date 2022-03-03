$(document).ready(function () {

    if ($('.owl-imoveis')) {
        $('.owl-imoveis').owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            mouseDrag: false
        })
        
        let contador = 0;

        const listItemsCarousel = $('.owl-imoveis .item')

        const numeroDeItens = listItemsCarousel.length

        $('.nav-right-imoveis span').click(function () {
            $('.owl-imoveis').trigger('next.owl.carousel');
            contador = contador + 1

            if(contador === numeroDeItens - 1) {
                $('.nav-right-imoveis').addClass('disabled')
            }else {
                $('.nav-right-imoveis').removeClass('disabled')
            }

            if(contador > 0) {
                $('.nav-left-imoveis').removeClass('disabled')
            }
        })

        $('.nav-left-imoveis span').click(function () {
            $('.owl-imoveis').trigger('prev.owl.carousel');
            
            contador = contador - 1

            if(contador === 0) {
                $('.nav-left-imoveis').addClass('disabled')
            }else {
                $('.nav-left-imoveis').removeClass('disabled')
            }

            if(contador  < numeroDeItens - 1) {
                $('.nav-right-imoveis').removeClass('disabled')
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