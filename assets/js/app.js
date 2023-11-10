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
  $('.shower').slick({
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
     dots:false,
  })


  // $('#search').on('click', function(){
  //   $('#search_modal').addClass('show');
  // })
  $('#search').on('click', function(){
    $('#search_modal').addClass('show');
  })
 
});

