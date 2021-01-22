import $ from 'jquery';

$(document).ready(() =>{
    // Слайдер
    if( $('.slider').length > 0 ){
        // Slider On Index Page
        let $slickIndex = $('.slider.slider_index');
        $slickIndex.slick({
            slidesToShow  : 1,
            slidesToScroll: 1,
            arrows        : true,
            dots          : false,
            autoplay      : false
        });
    }
});