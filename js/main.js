$(function () {
    $('.slider__items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });

    $('.header-nav__button').on('click', function(){
        $('.header-nav__list').slideToggle();
    });
});