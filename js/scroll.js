$(function () {
  $("#section-1").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#about").offset().top }, 1000);
    e.preventDefault();
  });
});
$(function () {
  $("#section-2").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#projects").offset().top }, 1000);
    e.preventDefault();
  });
});
$(function () {
  $("#section-3").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#news").offset().top }, 1000);
    e.preventDefault();
  });
});
$(function () {
  $("#section-4").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#contacts").offset().top }, 1000);
    e.preventDefault();
  });
});
$(function () {
  $("#home").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#home-section").offset().top }, 1000);
    e.preventDefault();
  });
});
$(function () {
  $("#scroll-down").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#contacts").offset().top }, 1000);
    e.preventDefault();
  });
});
