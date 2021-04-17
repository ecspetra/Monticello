"use strict";

$(document).ready(function () {
  const prevArrow = `<div class="arrow-prev"></div>`;
  const nextArrow = `<div class="arrow-next"></div>`;
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow,
    nextArrow,
  });
});

$(document).ready(function () {
  const prevArrow = `<div class="arrow-prev"></div>`;
  const nextArrow = `<div class="arrow-next"></div>`;
  $(".news-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow,
    nextArrow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
