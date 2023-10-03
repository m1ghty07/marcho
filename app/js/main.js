$(function () {
  $(".slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
});

$('[data-fancybox="gallery"]').fancybox({
  // Options will go here
});

$(".star").rateYo({
  starWidth: "18px",
  normalFill: "#ccccce",
  readOnly: true
});