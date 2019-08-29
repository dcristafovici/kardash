$(document).ready(function(){

  $('.burger').on('click',function(){
    $(this).children('svg').toggleClass('active')
    $(this).toggleClass('active')
    $('nav.menu').toggleClass('active')
  })

})