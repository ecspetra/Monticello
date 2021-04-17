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
    slidesToScroll: 2,
    prevArrow,
    nextArrow,
  });
});
