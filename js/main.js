addEventListener("scroll", (event) => {
  let currentScroll = $(window).scrollTop();

  if (currentScroll > 40) {
    $(".header").addClass("scroll");
    $("body").addClass("isScrollHeader");
  } else {
    $(".header").removeClass("scroll");
    $("body").removeClass("isScrollHeader");
  }
});

$(document).ready(function () {
  if ($(".burger-desktop").length > 0) {
    let burger = $(".burger-desktop");
    let body = $("body");
    let menu = $(".menu-invis");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").stop().slideDown();
        body.addClass("is-openMenu");
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").stop().slideUp();
      body.removeClass("is-openMenu");
    }

    $(window).resize(function () {
      if ($(window).width() >= 768) {
        if (burger.hasClass("opened")) {
          closeMenu();
        }
      }
    });
  }

  if ($(".burger-mobile").length > 0) {
    let burger = $(".burger-mobile");
    let body = $("body");
    let menu = $(".menu");
    let menuInvisBurger = $(".menu-invis-mobile__link--menu");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").stop().slideDown();
        body.addClass("is-openMenu");
      }
    });

    menuInvisBurger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").stop().slideDown();
        body.addClass("is-openMenu");
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").stop().slideUp();
      body.removeClass("is-openMenu");
    }

    $(window).resize(function () {
      if ($(window).width() >= 768) {
        if (burger.hasClass("opened")) {
          closeMenu();
        }
      }
    });
  }

  if ($(".search-block").length > 0) {
    const btn = $(".search-block .icon-search");
    const parents = btn.parents(".search-block");
    const input = parents.find("input");
    const btnClearInput = parents.find(".btn-clear-search");

    btn.on("click", () => {
      parents.toggleClass("opened");
      input.focus();
    });

    btnClearInput.on("click", () => {
      clearInput(input);
    });

    input.on("input", (event) => {
      $(event.target).val().length > 0
        ? btnClearInput.addClass("visible")
        : btnClearInput.removeClass("visible");
    });

    $(document).mouseup(function (e) {
      if (!parents.is(e.target) && parents.has(e.target).length === 0) {
        parents.removeClass("opened");
        input.val("");
        btnClearInput.removeClass("visible");
      }
    });
  }

  if ($(".footer-search").length > 0) {
    const parents = $(".footer-search");
    const input = $(".footer-search input");
    const btnClearInput = parents.find(".btn-clear-search");

    btnClearInput.on("click", () => {
      clearInput(input);
    });

    input.on("input", (event) => {
      $(event.target).val().length > 0
        ? btnClearInput.addClass("visible")
        : btnClearInput.removeClass("visible");
    });
  }

  if ($(".buy-from").length > 0) {
    $(".buy-from__head").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".buy-from__line").removeClass("opened");
        $(this).next(".buy-from__body").stop().slideUp();
      } else {
        $(".buy-from__line").removeClass("opened");
        $(".buy-from__head").removeClass("active");
        $(".buy-from__body").stop().slideUp();

        $(this).parents(".buy-from__line").addClass("opened");
        $(this).addClass("active");
        $(this).next(".buy-from__body").stop().slideDown();
      }
    });
  }

  if ($(".video-block").length > 0) {
    $(".video-block .play").on("click", function () {
      const play = $(this);
      const video = play.siblings("video").get(0);

      if (video.paused) {
        play.addClass("play--play");
        video.play();
      } else {
        play.removeClass("play--play");
        video.pause();
      }
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".dop-link-all").length > 0) {
    $(".dop-link-all").on("click", function (event) {
      event.preventDefault();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".dop-list").removeClass("opened");
      } else {
        $(this).addClass("active");
        $(this).siblings(".dop-list").addClass("opened");
      }
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($("[data-aos]").length > 0) {
    if ($(window).width() < 1280) {
      AOS.init({
        disable: true,
      });
    } else {
      AOS.init({
        once: true,
      });
    }
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($("[data-btn-disabled]").length > 0) {
    $("[data-btn-disabled]").on("click", function () {
      const formBlock = $(this).parents("form");
      const btn = formBlock.find("[data-for-disabled]");
      const isDisabled = btn.prop("disabled");

      btn.prop("disabled", !isDisabled);
    });
  }

  if ($(".filter-btn").length > 0) {
    $(".filter-btn").on("click", function () {
      $("body").addClass("hidden");
      $(this).toggleClass("active");
      $(".filter-content").stop().slideToggle();
      $(".overlay").toggleClass("visible");
    });

    $(".filter-title__close").on("click", function () {
      closeFilter();
    });

    $(".overlay").on("click", function () {
      closeFilter();
    });

    function closeFilter() {
      if ($(".filter-btn").hasClass("active")) {
        $("body").removeClass("hidden");
        $(".overlay").removeClass("visible");
        $(".filter-btn").removeClass("active");
        $(".filter-content").stop().slideUp();
      }
    }
  }

  if ($(".rangeInput").length > 0) {
    const range = $(".rangeInput");
    const rangeMin = 0;
    const rangeMax = 100000;
    const rangeFrom = 0;

    const inputMin = $(".rangeInputs__min");
    const inputMax = $(".rangeInputs__max");

    range.ionRangeSlider({
      type: "double",
      min: rangeMin,
      max: rangeMax,
      from: rangeFrom,
      hide_from_to: true,
      step: 1,

      onStart: function (data) {
        inputMin.val(data.from);
        inputMax.val(data.to);
      },

      onChange: function (data) {
        inputMin.val(data.from);
        inputMax.val(data.to);
      },
    });

    const sliderInstance = range.data("ionRangeSlider");

    inputMin.on("input", function () {
      let val = parseInt($(this).val(), 10);

      if (val < rangeMin || isNaN(val)) {
        val = rangeMin;
      }

      if (val > parseInt(inputMax.val(), 10)) {
        val = parseInt(inputMax.val(), 10);
      }

      sliderInstance.update({ from: val });
    });

    inputMax.on("input", function () {
      let val = parseInt($(this).val(), 10);

      if (val > rangeMax || isNaN(val)) {
        val = rangeMax;
      }

      if (val < parseInt(inputMin.val(), 10)) {
        val = parseInt(inputMin.val(), 10);
      }

      sliderInstance.update({ to: val });
    });
  }

  if ($(".filter").length > 0) {
    initFilterMobile();

    function initFilterMobile() {
      $(".filter-line__head").on("click", function () {
        $(this)
          .toggleClass("opened")
          .next(".filter-line__body ")
          .stop()
          .slideToggle();
      });
    }
  }

  if ($(".menu").length > 0) {
    $(".menu-link").on("click", function (e) {
      e.preventDefault();

      const currentLink = $(this);
      const menuCurrentSub = currentLink.next(".menu-sub");

      $(".menu-link")
        .not(currentLink)
        .each(function () {
          const otherLink = $(this);
          const otherSub = otherLink.next(".menu-sub");

          otherLink.removeClass("opened");
          otherSub.stop(true, true).stop().slideUp();
        });

      currentLink.toggleClass("opened");
      menuCurrentSub.stop(true, true).stop().slideToggle();
    });

    $(".menu-sub__close").on("click", function () {
      $(".menu-sub").stop().slideUp();
    });
  }

  if ($(".product-section__invis").length > 0) {
    const invis = $(".product-section__invis");
    const bodySection = $(".product-section-body");
    const footer = $("footer");

    function isInViewport(elem) {
      const windowTop = $(window).scrollTop();
      const windowBottom = windowTop + $(window).height();
      const elemTop = elem.offset().top;
      const elemBottom = elemTop + elem.outerHeight();

      return elemBottom > windowTop && elemTop < windowBottom;
    }

    $(window).on("scroll resize", function () {
      const windowTop = $(window).scrollTop();
      const bodyTop = bodySection.offset().top;
      const bodyVisible = isInViewport(bodySection);
      const footerVisible = isInViewport(footer);
      const scrolledAboveBody = windowTop + $(window).height() < bodyTop;

      if (bodyVisible && !footerVisible) {
        invis.addClass("visible");
      } else if (footerVisible || scrolledAboveBody) {
        invis.removeClass("visible");
      }
    });
  }

  // sliders

  if ($(".slider-catalog").length > 0) {
    const sliders = document.querySelectorAll(".slider-catalog");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".btnSwiperNext")[0];
          navPrev = $(slider).find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            pagination: {
              el: $(slider).find(".swiper-pagination")[0],
              type: "bullets",
            },
            breakpoints: {
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1550: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".slider-catalog--v2").length > 0) {
    const sliders = document.querySelectorAll(".slider-catalog--v2");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".btnSwiperNext")[0];
          navPrev = $(slider).find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            pagination: {
              el: $(slider).find(".swiper-pagination")[0],
              type: "bullets",
            },
            breakpoints: {
              0: {
                slidesPerView: 1.25,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1550: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".product-slider-big").length > 0) {
    const thumbSlider = new Swiper(".product-slider-small", {
      spaceBetween: 4,
      slidesPerView: 4,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 4,
        },
      },
    });

    const mainSlider = new Swiper(".product-slider-big", {
      spaceBetween: 10,
      thumbs: {
        swiper: thumbSlider,
      },
    });
  }

  if ($(".grettings-main__slider").length > 0) {
    if ($(window).width() < 1024) {
      const grettingsSlider = new Swiper(".grettings-main__slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }

  if ($(".constructionSlider").length > 0) {
    const sliders = document.querySelectorAll(".constructionSlider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".btnSwiperNext")[0];
          navPrev = $(slider).find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            // pagination: {
            //   el: $(slider).find(".swiper-pagination")[0],
            //   type: "bullets",
            // },
            breakpoints: {
              0: {
                slidesPerView: 1.25,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1550: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();

    $(".circleColorPlus").on("click", function () {
      $(this).hide();
      $(this)
        .parents(".colors-constr")
        .find(".circleColor")
        .removeClass("hide");
    });
  }

  if ($(".foto-slider-big").length > 0) {
    const thumbFoto = new Swiper(".foto-slider-small", {
      slidesPerView: 4,
      spaceBetween: 20,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".btnSwiperNext",
        prevEl: ".btnSwiperPrev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        390: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    const fotoMain = new Swiper(".foto-slider-big", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".btnSwiperNext",
        prevEl: ".btnSwiperPrev",
      },
      thumbs: {
        swiper: thumbFoto,
      },
    });
  }

  // /sliders
});

function clearInput(input) {
  input.val("").focus().trigger("input");
}
