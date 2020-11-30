$(document).ready(function(){
  $('#causerrSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: false,
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
    prevArrow:'<button type="button" class="slick-prev white-away"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next white-away"><i class="fas fa-chevron-right"></i></button>'
});  
  
  $('#maniNavMobile').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        centerPadding: "0px"
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
        variableWidth: true,
        arrows: false,
        centerPadding: "0px"
    });

    $('#homeBannerSlider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: false,
      arrows: false,
      centerPadding: "0px"
    });

    $('#storeSlider').slick({
      dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        centerPadding: "0px"
    });

    $('#charitiesSlider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
      arrows: false,
      centerPadding: "0px"
    });

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
    });

    $('.drawer-backdrop, .close-drawer-menu').click(function(){
      $('body').removeClass('drawer-menu-opened');
    });

    $('.open-cart-menu').click(function(){
      $('body').addClass('cart-menu-opened');
    });

    $('.cart-list-backdrop, .close-cart-menu').click(function(){
      $('body').removeClass('cart-menu-opened');
    });


    // Clear the categories filters
    $('.clear-all-filter').click(function(){
      $('.cat-filter-options').prop('checked',false);
      return false
    });
});

// Page scroll move based product details accordion
$('#collapseProductDetails').on('shown.bs.collapse', function () {
  $('html, body').animate({
      scrollTop: $("#collapseProductDetailsTitle").offset().top -80
  }, 250);
  console.log('collapseProductDetails expanded');
});

$('#collapseProductFinePrint').on('shown.bs.collapse', function () {
  $('html, body').animate({
      scrollTop: $("#collapseProductFinePrintTitle").offset().top - 80
  }, 250);
  console.log('collapseProductFinePrint expanded');
});

$('#collapseProductReviews').on('shown.bs.collapse', function () {
  $('html, body').animate({
      scrollTop: $("#collapseProductFinePrintTitle").offset().top
  }, 250);
  console.log('collapseProductReviews expanded');
});