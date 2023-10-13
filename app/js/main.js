$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  })
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  })
  $(".slider__inner").slick({
    dots: true,
    arrows: false,
    autoplay: true,
  });
  $(".filter-price__input").ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#ccccce",
    readOnly: true,
  });
  $('.select-style, .product-item__count').styler();
  $('.shop-filter__btn').on('click', function () {
    $('.shop-filter__btn').removeClass('shop-filter__btn--active');
    $(this).addClass('shop-filter__btn--active');
  });
  $('.button-list').on('click', function () {
    $('.products__item').addClass('products-item--list');
  })
  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products-item--list');
  })
});



function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = document.querySelector('#countdown').getAttribute('data-time');
initializeClock('countdown', deadline);


