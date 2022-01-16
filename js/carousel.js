document.addEventListener('DOMContentLoaded', function() {
$('.slick-carousel').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: true,
    speed: 500,
    centerMode: false,
    centerPadding: '0',
    variableWidth: true,
    touchThreshold: 1000,
    mobileFirst: true,
    edgeFriction: 0,
    rows: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        }
      },
    ],
  });
});