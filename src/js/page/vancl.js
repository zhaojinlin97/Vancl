var $ = require('jquery');

var swiper = new Swiper('.vancl_nav .swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
});
$('.vancl_s_cuo img').click(function () {
    $('.vancl_software').hide();
})