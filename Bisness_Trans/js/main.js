$(document).ready(function () {
  // маскед
  jQuery(function ($) {
    $(".user-phone").mask("+7 (999) 999-99-99");
  });
  $(".search-img").click(function (e) {
    $(".search").toggleClass("search-active");
  });

  // Слайдеры
  $(".main-slider").slick({
    arrows: true,
    nextArrow:
      '<button type="button" class="slider-main slide-n"></i></button>',
    prevArrow:
      '<button type="button" class="slider-main slide-p">  </i></button>',
    fade: true,
    dots: true,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".works-slider").slick({
    arrows: true,
    nextArrow: '<button type="button" class="slider-main slide-n"></button>',
    prevArrow: '<button type="button" class="slider-main slide-p"> </button>',
    fade: true,
    dots: false,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $(".news-slider").slick({
    // infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true,
          dotsClass: "slick-dots partners-dots news-dots",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          dotsClass: "slick-dots partners-dots news-dots",
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: "slick-dots partners-dots news-dots",
        },
      },
    ],
  });

  $(".partners-slider").slick({
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          dotsClass: "slick-dots partners-dots",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
          dots: true,
          dotsClass: "slick-dots partners-dots",
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: "slick-dots partners-dots",
        },
      },
    ],
  });

  /*якоря*/
  $(function () {
    $('ul li a[href^="#"]').on("click", function (event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      $("html, body").animate({ scrollTop: dn }, 1000);
    });
  });

  /*Модальные окна*/
  $(".open-mform").click(function (e) {
    $("#modal-form-phone").fadeIn();
  });

  $(".application-btn").click(function (e) {
    $("#modal-form-application").fadeIn();
  });

  $(".popup-close").click(function (e) {
    e.preventDefault();
    $(this).parents(".popup").fadeOut();
  });

  /*Аякс*/
  $("#form-callback").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      phone: {
        required: true,
        minlength: 10,
      },
      checkOne: {
        required: true,
        minlength: 4,
      },
      checkTwo: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      name: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
      phone: {
        required: "Заполните поле",
        minlength: "Введите номер",
      },
      checkOne: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
      checkTwo: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
    },
  });

  $("#forms-btn").click(function (e) {
    if (!$(this).closest("#form-callback").valid()) {
      e.preventDefault();
    }
  });
  $("#form-callback").submit(function (event) {
    event.preventDefault();

    var msg = $("#form-callback").serialize();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: msg,
      success: function (data) {
        $("#modal-thank").fadeIn();
        $("#form-callback")[0].reset();
      },
      error: function (xhr, str) {
        $("#modal-thank").fadeIn();
      },
    });
  });

  // Для модалки
  $("#form-application").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      phone: {
        required: true,
        minlength: 10,
      },
      checkOne: {
        required: true,
        minlength: 4,
      },
      checkTwo: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      name: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
      phone: {
        required: "Заполните поле",
        minlength: "Введите номер",
      },
      checkOne: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
      checkTwo: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
    },
  });

  $("#application-modal-btn").click(function (e) {
    if (!$(this).closest("#form-application").valid()) {
      e.preventDefault();
    }
  });
  $("#form-application").submit(function (event) {
    event.preventDefault();

    var msg = $("#form-application").serialize();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: msg,
      success: function (data) {
        $("#modal-form-application").fadeOut();
        $("#modal-thank").fadeIn();
        $("#form-application")[0].reset();
      },
      error: function (xhr, str) {
        $("#modal-form-application").fadeOut();
        $("#modal-thank").fadeIn();
      },
    });
  });

  // Для модалки
  $("#form-phone").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      phone: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "Заполните поле",
        minlength: "Не менее 4 символов",
      },
      phone: {
        required: "Заполните поле",
        minlength: "Введите номер",
      },
    },
  });

  $("#form-phone-btn").click(function (e) {
    if (!$(this).closest("#form-phone").valid()) {
      e.preventDefault();
    }
  });
  $("#form-phone").submit(function (event) {
    event.preventDefault();

    var msg = $("#form-phone").serialize();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: msg,
      success: function (data) {
        $("#modal-form-phone").fadeOut();
        $("#modal-thank").fadeIn();
        $("#form-phone")[0].reset();
      },
      error: function (xhr, str) {
        $("#modal-form-phone").fadeOut();
        $("#modal-thank").fadeIn();
      },
    });
  });
  new WOW().init();
});
