$(document).ready(function() {

    //-----------------------------------------owl-carousel------
    $('.slide-active').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        mouseDrag: false,
        touchDrag:false
    });
    $('.all-item,.women-item,.men-item').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                 dots: true
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
   

    $('.clients-active,.blog-active').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('button.owl-prev span').remove();
    $('button.owl-next span').remove();
    // $('.shop-slide .owl-carousel.owl-drag .owl-item').removeClass("cloned");
    //----------------------------------End carousel-----------------------------------------------------
    //----------------------------Start Shopping Cart--------------------------------------
    $('.shop-cart a,.cart-mobile a').click(function() {
        $('body').addClass("open-shopping-cart");
        return false;
    });
    $('.shopping-cart-close a,.shopping-cart-bg').click(function() {
        $('body').removeClass("open-shopping-cart");
        return false;
    });
    //----------------------------End Shopping Cart--------------------------------------
    //----------------------------Start Main Menu--------------------------------------
    $(".main-menu a,.menu-mobile a").click(function() {
        $('body').addClass("open-main-menu");
        return false;
    })
    $(".main-menu-close a,.main-menu-bg").click(function() {
        $('body').removeClass("open-main-menu");
        return false
    })
    //----------------------------End Main Menu--------------------------------------
    //----------------------------Start Extract Menu--------------------------------------
    $("ul.sub-menu").hide();
    $('.main-menu-single ul li a,.icon-main-menu').click(function(e) {
        e.preventDefault();
        var t = $(this).parent();
        if (t.hasClass("open-sub-main-menu")) {
            t.removeClass("open-sub-main-menu");
            t.find(">ul").slideUp();
        } else {
            t.addClass("open-sub-main-menu");
            t.find(">ul").slideDown();
            t.siblings().removeClass("open-sub-main-menu").find("ul").stop().slideUp();
        }
    });
    //----------------------------End Extract Menu--------------------------------------

    //---------------------------------Search-box------------------
    $('.search,.search-mobile a').click(function() {
        $('.search-area').show();
        $('.search-txt').focus();
        return false;
    });
    $('.close').click(function() {
        $('.search-area').hide();
        return false;
    });
       //---------------------------------End Search-box---------
    //----------------Full Scren Slide--------------------
    fullScreenSlide();
    $(window).resize(function() {
        fullScreenSlide();
    });
});

function fullScreenSlide() {
    var _width = $(window).innerWidth();
    var _height = $(window).innerHeight();
    $('.item').css({
        "position": "relative",
        "overflow": "hidden"
    });
    $('.item').width(_width);
    $('.item').height(_height);
}


