/** First Slider */
$('.slider-one')
    .not('.slick-intialized')
    .slick({
        autoplay:true,
        autoplaySpeed: 3000,
        prevArrow :".site-slider .slider-btn .prev",
        nextArrow :".site-slider .slider-btn .next",
        dots: true,
    });