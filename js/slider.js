$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        appendArrows: $("#team"),
        dots: true,
        appendDots: $("#team"),
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        autoplay: true,
        autoplaySpeed: 1300,
        slidesToScroll: 1,
    });
});