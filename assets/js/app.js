$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        arrows:false,
        dots:true,

    });
    $('.myclass').slick({
      autoplay:true,
      // infinite:true,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      dots:true,
    })
  });
      