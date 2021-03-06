$(function () {

    //menu
    $(document).on('click','.bar-menu',function () {
        if ($('body').hasClass('show-sidebar')) {
            $('body').removeClass('show-sidebar');
        }
        if ($('body').hasClass('show-menu')) {
            $(this).removeClass('active');
            $('body').removeClass('show-menu').removeClass('modal-open');
        } else {
            $(this).addClass('active');
            $('body').addClass('show-menu').addClass('modal-open');
        }
    });



    $(document).on('click','.color-all',function () {
       var $parent = $(this).parent('.catalog-item-hover');
       $parent.find('.color-all').removeClass('active');
       $parent.find(this).addClass('active');
       $parent.find('.data-img').attr('src', $(this).data('img'));
    });

    //odd
    $('.information__item:odd').addClass('order');

    //carousel
    $('.owl-carousel.carousel-otziv').owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });
    $('.owl-carousel.carousel-info').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<",">"],
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });

    $(document).on('click','.size-ul-li', function () {
        var parent = $(this).parent().parent().parent();
        parent.find('.size-ul-li').removeClass('active');
        parent.find(this).addClass('active');

        //data-attr
        parent.find('.price .price-span.active').removeClass('active');
        var $data_size = $(this).data('size');
        var $data_price = parent.find('.price.price-span').data('price');
        $data_price = $data_size;
        if($data_size == $data_price){
            parent.find('[data-price="'+$data_size+'"]').addClass("active");
        }
        $(this).addClass("active");
    });


    //button up
    $(document).on('click','.top',function () {
        $('body,html').animate({
            scrollTop: 0
        },'slow');
    });

    $(window).scroll(function () {
        if($(this).scrollTop()){
            $('.top').addClass('active');
        }else{
            $('.top').removeClass('active');
        }
    });

    //fixed menu
    // $(window).scroll(function () {
    //    if($(this).scrollTop() > 30){
    //        $('.header').addClass('fixed');
    //        $('.dop').addClass('fixed');
    //    }
    //    else{
    //        $('.header').removeClass('fixed');
    //        $('.dop').removeClass('fixed');
    //    }
    // });

    //scroll
    $(document).on('click','.head-menu > nav > ul > li > a', function () {

        $('.head-menu > nav > ul > li > a').removeClass('active');
        var $href = $(this).attr('href');
        $(this).addClass("active");
        $('.bar-menu').removeClass('active');
        $('body').removeClass('show-menu').removeClass('modal-open');
        $('html, body').animate({
            scrollTop: $($href).offset().top + 'px',
        }, 1000);
        return false;
    });


    //search
    $(document).on('input', '.inp-search',function () {
        if ($(this).val() != '') {
            $('.search').addClass('active');
        } else {
            $('.search').removeClass('active');
        }
    });

    //modal
    $(document).on('click','.all-js-data',function(){
        var parent = $(this).parent();
        var $data_price = parent.find('.price-span.active').data('sum');
        var $data_size = parent.find('.size-ul-li.active').data('size');
        var $data_color = parent.find('.color-all.active').data('color');

        $('.form-call [name="data[price]"]').val($data_price);
        $('.form-call [name="data[size]"]').val($data_size);
        $('.form-call [name="data[color]"]').val($data_color);
    });

    //img to svg
    if($('.js-svg-img').length){
        $('.js-svg-img').each(function(){
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                var $svg = $(data).find('svg');
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);

            }, 'xml');
        });
    }


});