$(function () {

  var mixer = mixitup('.directions__list')
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })
  // -------------------- team-slider ---------------
  $(".team__slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    appendDots: $(".team__slider-dots"),
    responsive:
    [
      {
        breakpoint: 1100,
        settings:{
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings:{
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings:{
          slidesToShow: 1,
          draggable: true,
          dots: true,
        },
      },
    ]
  })
  $(".team__slider-prev").on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $(".team__slider-next").on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $(".testimonials__slider-dots")
  })
  $(".testimonials__prev").on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $(".testimonials__next").on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }

  }, 0);
  // $(window).on('scroll', function(){
  // })
  $('.burger, .overlay').on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})