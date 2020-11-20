
$(document).ready(function(){
    $('.offers-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        //variableWidth: true,
        centerPadding: "0px",
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'
    });

    $('.popular-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        //variableWidth: true,
        centerPadding: "0px",
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                variableWidth: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'
    });

    $('.merchants-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        //variableWidth: true,
        centerPadding: "0px",
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                variableWidth: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
              }
            }
        ],
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'
    });

    if($(window).width() > 992) {
      $('#brandNav').slick('unslick');
    }
    else {
      $('#brandNav').slick({
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        //variableWidth: true,
        centerPadding: "0",
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToScroll: 2,
                variableWidth: true
              }
            }
        ],
        prevArrow:'<button type="button" class="slick-prev square-shape"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next square-shape"><i class="fas fa-arrow-right"></i></button>'
      });
    }

});

$(window).resize(function(){
  if($(window).width() > 992) {
    $('#brandNav').slick('unslick');
  }
  else {
    $('#brandNav').slick({
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      //variableWidth: true,
      centerPadding: "0",
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              variableWidth: true
            }
          }
      ],
      prevArrow:'<button type="button" class="slick-prev square-shape"><i class="fas fa-arrow-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next square-shape"><i class="fas fa-arrow-right"></i></button>'
    });
  }
});


// Freezing menu on scoll
window.onscroll = function() {stickyClass()};

var sticky = header.offsetTop;

function stickyClass() {
  if (window.pageYOffset > sticky) {
    $('header').addClass('freezing-menu');
    $('body').addClass('freezing-menu-added');
  } else {
    $('header').removeClass('freezing-menu');
    $('body').removeClass('freezing-menu-added');
  }
}

$(document).ready(function(){
    $('.bar-btn').click(function(){
      $('body').addClass('drawer-menu-opened');
    })

    $('.drawer-backdrop').click(function(){
      $('body').removeClass('drawer-menu-opened');
    })
})