$(document).ready(function(){
  $('.slider').slick({
    autoplay:true,
    arrows:false,
    dots:true,

  });
  $('.slide_1').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });
  $('.slide_2').slick({
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
     dots:false,
  });
  $('.slide_3').slick({
    autoplay: true,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
  });

  $('.insta_slider').slick({
    autoplay:true,
    slidesToScroll:1,
    slidesToShow:6,
    arrows:false,
    dots:true,
  })

  
  $('#search').on('click', function(){
    $('#search_modal').addClass('show');
  })
 $('#close_btn').on('click', function(){
  $('#search_modal').removeClass('show');
 })
 //popup js
 $(window).on('load', function(){
  $('#popup').addClass('show')
 })
 $(".popup_x").on('click', function () {
  $('#popup').removeClass('show')
})
 // Deals container
 $('#timer').countdown('2024/10/10', function(event) {
  var $this = $(this).html(event.strftime(''

    + '<div><span>%D</span> <p>Days</p></div> '    
    + '<div><span>%H</span><p>Hours</p></div>'
    + '<div><span>%M</span> <p>min</p></div> '
    + '<div><span>%S</span><p>sec</p></div>'));
});
});

