$(function () {

  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });

  $('.header__menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header__menu-list').slideToggle(1420);
  });

  $(window).resize(function () {
    if ($(window).width() > 1420) {
      $('.header__menu-list').removeAttr('style');
    }
  });

});