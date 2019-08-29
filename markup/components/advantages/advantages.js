$(document).ready(function(){

  if(window.innerWidth < 481){

    var $adv = $('.advantages-items')
    $adv.slick({
      slidesToShow: 1,
      dots: true,
      arrows: false
    })
  }

})