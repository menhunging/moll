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
      $(this).toggleClass("active");
      $(".filter-content").stop().slideToggle();
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

  // /sliders
});

function clearInput(input) {
  input.val("").focus().trigger("input");
}
