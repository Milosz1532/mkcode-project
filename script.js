$(document).ready(function(){

    var typed = new Typed(".typing_title", {
        strings: ["MK CODE - <span>Strony tworzone z pasją</span>"],
        typeSpeed: 20,
        backSpeed: 0,
        backDelay: 4500,
        loop: true,
    });
    
    $('.client-slider.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        smartSpeed: 6000,
        autoplayTimeout: 12000,
        responsive: {
            0: {
                items: 1,
            },
        }
    })

    $(".company-list.owl-carousel").owlCarousel({
        loop: true,
        mouseDrag: false,
        autoplay: true,
        dots: false,
        responsiveClass:true,
        slideTransition: 'linear',
        autoplaySpeed: 2000,
        smartSpeed: 2000,
        autoplayTimeout: 2000,
        items:6,
    });
    
    $('#about_us .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            },
            1000: {
                items: 3
            },
        }
    })
});