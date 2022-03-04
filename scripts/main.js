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

            if (contador === numeroDeItens - 1) {
                $('.nav-right-imoveis').addClass('disabled')
            } else {
                $('.nav-right-imoveis').removeClass('disabled')
            }

            if (contador > 0) {
                $('.nav-left-imoveis').removeClass('disabled')
            }
        })

        $('.nav-left-imoveis span').click(function () {
            $('.owl-imoveis').trigger('prev.owl.carousel');

            contador = contador - 1

            if (contador === 0) {
                $('.nav-left-imoveis').addClass('disabled')
            } else {
                $('.nav-left-imoveis').removeClass('disabled')
            }

            if (contador < numeroDeItens - 1) {
                $('.nav-right-imoveis').removeClass('disabled')
            }
        })
    }

    if ($('.owl-feedback')) {
        $('.owl-feedback').owlCarousel({
            items: 2,
            nav: false,
            dots: false,
            slideBy: 2,
            margin: 100
        })


        const primerioItenAtivoNaTela = document.querySelector('.owl-feedback .owl-item');

        primerioItenAtivoNaTela.classList.add('border-right-feedback')

        $('.owl-feedback').on('changed.owl.carousel', function (event) {
            const owlItem = $('.owl-feedback .owl-item');
            owlItem.removeClass('border-right-feedback');

            setTimeout(function () {
                const owlItensActive = $('.owl-feedback .owl-item.active');
                
                owlItensActive[0].classList.add('border-right-feedback');
            }, 50);
        })
    
        let contador = 0;

        const numeroDeItensAtivos = $('.owl-feedback .owl-item.active');

        const listItemsCarousel = $('.owl-feedback .item')

        const numeroDeItens = Math.round(listItemsCarousel.length / numeroDeItensAtivos.length)


        $('.nav-right-feedback span').click(function () {

            $('.owl-feedback').trigger('next.owl.carousel');
            contador = contador + 1

            if (contador === numeroDeItens - 1) {
                $('.nav-right-feedback').addClass('disabled')
            } else {
                $('.nav-right-feedback').removeClass('disabled')
            }

            if (contador > 0) {
                $('.nav-left-feedback').removeClass('disabled')
            }
        })

        $('.nav-left-feedback span').click(function () {
            $('.owl-feedback').trigger('prev.owl.carousel');

            contador = contador - 1

            if (contador === 0) {
                $('.nav-left-feedback').addClass('disabled')
            } else {
                $('.nav-left-feedback').removeClass('disabled')
            }

            if (contador < numeroDeItens - 1) {
                $('.nav-right-feedback').removeClass('disabled')
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