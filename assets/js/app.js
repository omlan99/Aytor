$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        arrows:false,
        dots:true,

    });
    $('.slide').slick({
      autoplay:true,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      dots:false,
    })
  });
      