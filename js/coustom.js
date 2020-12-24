jQuery(document).ready(function(){
    
var typed = new Typed('.type', {
    strings: [
      'web designer', 
      'And developer'
    ],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });

  jQuery(".owl-carousel").owlCarousel({
    'items' : 3,
    'autoplay' : true,
    'autoplayTimeout' : 1200,
    'loop' : true,
    'autoplayHoverPause' : true,
    'margin' : 20,
    'autoplayHoverPause' : true,
    'responsiveClass' :true,
     'responsive' : {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 3,
        nav: true
      },
      
    }
    
});
  jQuery(".content").mixItUp();

  $('a').smoothScroll();

  new WOW().init();

  $('body').materialScrollTop();

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  jQuery(window).scroll(function(){
    var ut = jQuery(window).scrollTop();

    if(ut > 200){
        jQuery(".main-menu").addClass("fixed");
    }
    else{
        jQuery(".main-menu").removeClass("fixed");
    }
  });



});
