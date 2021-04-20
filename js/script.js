"use strict";

$(document).ready(function () {
  const prevArrow = `<div class="arrow-prev"></div>`;
  const nextArrow = `<div class="arrow-next"></div>`;
  $(".slider").slick({
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: "hero-dots",
    prevArrow,
    nextArrow,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  const prevArrow = `<div class="arrow-prev"></div>`;
  const nextArrow = `<div class="arrow-next"></div>`;
  $(".news-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    dotsClass: "news-dots",
    prevArrow,
    nextArrow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .navigation-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
