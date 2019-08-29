$(document).ready(function(){

  var $sliderItems = $('.slider-items')
  
  $sliderItems.slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000
  })

})