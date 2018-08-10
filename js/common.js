$(function () {

    $(document).on('click','.size-ul-li', function () {
        var parent = $(this).parent().parent();
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

    //fixed menu
    $(window).scroll(function () {
       if($(this).scrollTop() > 30){
           $('.header').addClass('fixed');
           $('.dop').addClass('fixed');
       }
       else{
           $('.header').removeClass('fixed');
           $('.dop').removeClass('fixed');
       }
    });

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

        $('.form-call [name="data[price]"]').val($data_price);
        $('.form-call [name="data[size]"]').val($data_size);
    });

});