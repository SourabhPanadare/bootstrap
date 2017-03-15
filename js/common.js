/*------------------------------------------------------Document Ready Function-----------------------------------------*/

$(document).ready(function(){
  var w = $(window).width();
  var h = $(window).height();


  $('.owl-carousel').owlCarousel({
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    },
    nav: true,
    loop: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    touchDrag  : true,
    mouseDrag  : false
  });
  
});

/*----------------------------------------------------Window Resize Function---------------------------------------------*/

$(window).resize(function(){
  var w = $(window).width();
  var h = $(window).height();

  
  
});



/*----------------------------------------------------Window Load Function---------------------------------------------*/

$(window).load(function() {
	
});



/*----------------------------------------------------Window Scroll Function---------------------------------------------*/

$(window).scroll(function(){
	
});



/*-------------------------------------Common JS--------------------------------------*/
var w = $(window).width();
var h = $(window).height();


  
 
 