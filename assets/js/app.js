$(document).ready(function(){
  $('.slider').slick({
    autoplay:true,
    arrows:false,
    dots:true,

  });
  $('.slide_1').slick({
    autoplay:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
  })
  $('.slide_2').slick({
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
     dots:false,
  })
  $('.slide_3').slick({
    autoplay: true,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
  })


  
  $('#search').on('click', function(){
    $('#search_modal').addClass('show');
  })
//  $('search_modal').on('click', function(){
//   $('search_modal').removeclass('show');
//  })
});

