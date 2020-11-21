
$(document).ready(function(){
    $('#maniNavMobile').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        centerPadding: "0px",
    });

    $('#causerrsList').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: true,
        centerPadding: "30px",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false
              }
            }
        ],
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });

    $('.carousel').carousel({
      interval: false
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

    if($(window).width() < 992) {
      $('#productThumbSlide').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          //variableWidth: true,
          arrows: false,
          centerPadding: "0px"
      });

      $('#productDetailSuggesion').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          arrows: false,
          centerPadding: "0px"
      });
    }

});

$(window).resize(function(){
  if($(window).width() < 992) {
    $('#productThumbSlide').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        //variableWidth: false,
        arrows: false,
        centerPadding: "0px"
    });

    $('#productDetailSuggesion').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        centerPadding: "0px"
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

    $('.drawer-backdrop, .close-drawer-menu').click(function(){
      $('body').removeClass('drawer-menu-opened');
    })
})