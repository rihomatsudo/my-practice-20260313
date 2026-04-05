$(function () {
  function s() {
    i.each(function () {
      let s = $(this).find(".advantages_img_screen"),
        e = $(this).find(".advantages_img_pop"),
        o = $(this).index() + 1,
        a = $("#advantage-" + o + " .advantages_img_slide_item");
      (s.appendTo(a), e.appendTo(a));
    });
  }
  function e() {
    n.each(function () {
      let s = $(this).find(".advantages_img_screen"),
        e = $(this).find(".advantages_img_pop"),
        o = $(this).index() + 1,
        a = $(".advantages_sticky_item.img" + o);
      (s.appendTo(a), e.appendTo(a));
    });
  }
  let o = $(window).outerWidth(),
    a = $(window).outerHeight(),
    t = 1024,
    l = 800,
    n = $(".advantage"),
    i = $(".advantages_sticky_item");
  (o > 1024 && a > 560 && $(".advantages_sticky_img").show(),
    $("#load_bg").addClass("hide"),
    o <= t
      ? $("#f-visual_cv_btn").appendTo(".f-visual_btn__tb")
      : a >= 561
        ? ($("#f-visual_cv_btn").appendTo(".f-visual_btn__pc"), e())
        : ($("#f-visual_cv_btn").appendTo(".f-visual_btn__pc"), s()),
    $(window).on("resize", () => {
      let o = $(window).outerWidth(),
        a = $(window).outerHeight();
      o <= t
        ? ($("#f-visual_cv_btn").appendTo(".f-visual_btn__tb"), s())
        : a >= 561
          ? ($("#f-visual_cv_btn").appendTo(".f-visual_btn__pc"), e())
          : ($("#f-visual_cv_btn").appendTo(".f-visual_btn__pc"), s());
    }),
    $(".achievement_logo_list").slick({
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 0,
      speed: 3e3,
      cssEase: "linear",
      variableWidth: !0,
      pauseOnFocus: !1,
      pauseOnHover: !1,
      centerMode: !1,
      arrows: !1,
      lazyLoad: "progressive",
    }));
  let d = 0;
  ($(window).on("load resize scroll", function () {
    let s = $("footer").offset().top,
      e = $(window).scrollTop(),
      o = e + a / 2,
      l = $(window).outerWidth();
    (l <= t
      ? $(".slide_menu").hasClass("open") ||
        (e > 500
          ? d < $(window).scrollTop() - 5
            ? ($("header").removeClass("show"),
              $(".header_icon-wrap").removeClass("open"),
              $(".signin_menu").removeClass("show"),
              $(".slide_menu").removeClass("open"),
              $("#slide_bg").removeClass("show"),
              $("#fixed-button").addClass("show"))
            : d > $(window).scrollTop() + 5 &&
              ($("header").addClass("show"),
              o < s && $("#fixed-button").removeClass("show"))
          : ($("header").addClass("show"),
            $("#fixed-button").removeClass("show")))
      : ($(".header_icon-wrap").removeClass("open"),
        $(".slide_menu").removeClass("open"),
        $("#slide_bg").removeClass("show")),
      (d = e));
  }),
    $(document).on("click", function (s) {
      ($(s.target).closest(".signin_trigger").length
        ? (o <= t &&
            $(".slide_menu").hasClass("open") &&
            $(".slide_menu").removeClass("open"),
          $(".signin_menu").hasClass("show")
            ? $(".signin_menu").removeClass("show")
            : $(".signin_menu").addClass("show"))
        : $(s.target).closest(".signin_trigger").length ||
          $(s.target).closest(".signin_menu").length ||
          $(".signin_menu").removeClass("show"),
        $(s.target).closest(".header_icon-wrap").length
          ? ($(".signin_menu").hasClass("show") &&
              $(".signin_menu").removeClass("show"),
            $(".slide_menu").hasClass("open")
              ? ($(".header_icon-wrap").removeClass("open"),
                $(".slide_menu").removeClass("open"))
              : ($(".header_icon-wrap").addClass("open"),
                $(".slide_menu").addClass("open")),
            $("#slide_bg").hasClass("show")
              ? $("#slide_bg").removeClass("show")
              : $("#slide_bg").addClass("show"))
          : $(s.target).closest(".header_icon-wrap").length ||
            $(s.target).closest(".slide_menu").length ||
            ($(".header_icon-wrap").removeClass("open"),
            $(".slide_menu").removeClass("open"),
            $("#slide_bg").removeClass("show")));
    }));
  const r = 60,
    f = Math.floor(1e3 / r),
    v = performance.now();
  let _ = v,
    p = 0,
    c = 0;
  const w = () => {
      frameId = requestAnimationFrame(g);
    },
    g = (s) => {
      if (((p = s), (c = p - _), c <= f)) return void w();
      _ = p - (c % f);
      let e = $(window).outerWidth(),
        o = $(window).scrollTop(),
        n = o + a / 2,
        i = $(".advantages"),
        d = ($(".advantage"), $("#advantage-1")),
        r = $("#advantage-2"),
        v = $("#advantage-3"),
        g = $("#advantage-4"),
        h = $("#advantage-5"),
        C = $(".advantages_sticky_item.img1"),
        m = $(".advantages_sticky_item.img2"),
        u = $(".advantages_sticky_item.img3"),
        b = $(".advantages_sticky_item.img4"),
        k = $(".advantages_sticky_item.img5");
      $(".advantages").offset().top;
      (e > t
        ? (n >= d.offset().top && n < r.offset().top
            ? i.addClass("scrolling_1")
            : i.removeClass("scrolling_1"),
          n >= r.offset().top && n < v.offset().top
            ? i.addClass("scrolling_2")
            : i.removeClass("scrolling_2"),
          n >= v.offset().top && n < g.offset().top
            ? i.addClass("scrolling_3")
            : i.removeClass("scrolling_3"),
          n >= g.offset().top && n < h.offset().top
            ? i.addClass("scrolling_4")
            : i.removeClass("scrolling_4"),
          n >= h.offset().top && o < h.offset().top + h.outerHeight()
            ? i.addClass("scrolling_5")
            : i.removeClass("scrolling_5"),
          n < r.offset().top
            ? (C.addClass("show"), d.addClass("show"))
            : (C.removeClass("show"), d.removeClass("show")),
          n >= r.offset().top && n < v.offset().top
            ? (m.addClass("show"), r.addClass("show"))
            : (m.removeClass("show"), r.removeClass("show")),
          n >= v.offset().top && n < g.offset().top
            ? (u.addClass("show"), v.addClass("show"))
            : (u.removeClass("show"), v.removeClass("show")),
          n >= g.offset().top && n < h.offset().top
            ? (b.addClass("show"), g.addClass("show"))
            : (b.removeClass("show"), g.removeClass("show")),
          n >= h.offset().top && o < h.offset().top + h.outerHeight()
            ? (k.addClass("show"), h.addClass("show"))
            : (k.removeClass("show"), h.removeClass("show")))
        : e <= t && e > l
          ? (n >= d.offset().top - 50 && n < r.offset().top
              ? (i.addClass("scrolling_1"), d.addClass("show"))
              : (i.removeClass("scrolling_1"), d.removeClass("show")),
            n >= r.offset().top && n < v.offset().top
              ? (i.addClass("scrolling_2"), r.addClass("show"))
              : (i.removeClass("scrolling_2"), r.removeClass("show")),
            n >= v.offset().top && n < g.offset().top
              ? (i.addClass("scrolling_3"), v.addClass("show"))
              : (i.removeClass("scrolling_3"), v.removeClass("show")),
            n >= g.offset().top && n < h.offset().top
              ? (i.addClass("scrolling_4"), g.addClass("show"))
              : (i.removeClass("scrolling_4"), g.removeClass("show")),
            n >= h.offset().top && o < h.offset().top + h.outerHeight() - 100
              ? (i.addClass("scrolling_5"), h.addClass("show"))
              : (i.removeClass("scrolling_5"), h.removeClass("show")))
          : (o + 100 >= d.offset().top - 100 && o + 100 < r.offset().top
              ? d.addClass("show")
              : d.removeClass("show"),
            o + 100 >= r.offset().top && o + 100 < v.offset().top
              ? r.addClass("show")
              : r.removeClass("show"),
            o + 100 >= v.offset().top && o + 100 < g.offset().top
              ? v.addClass("show")
              : v.removeClass("show"),
            o + 100 >= g.offset().top && o + 100 < h.offset().top
              ? g.addClass("show")
              : g.removeClass("show"),
            o + 100 >= h.offset().top &&
            o < h.offset().top + h.outerHeight() - 150
              ? h.addClass("show")
              : h.removeClass("show"),
            n >= d.offset().top - 50 && n < r.offset().top
              ? i.addClass("scrolling_1")
              : i.removeClass("scrolling_1"),
            n >= r.offset().top && n < v.offset().top
              ? i.addClass("scrolling_2")
              : i.removeClass("scrolling_2"),
            n >= v.offset().top && n < g.offset().top
              ? i.addClass("scrolling_3")
              : i.removeClass("scrolling_3"),
            n >= g.offset().top && n < h.offset().top
              ? i.addClass("scrolling_4")
              : i.removeClass("scrolling_4"),
            n >= h.offset().top && o < h.offset().top + h.outerHeight() - 100
              ? i.addClass("scrolling_5")
              : i.removeClass("scrolling_5")),
        w());
    };
  w();
  const h = new IntersectionObserver((s) => {
    s.forEach((s) => {
      s.isIntersecting
        ? (window.addEventListener("scroll", w, { passive: !0 }),
          window.addEventListener("resize", w, { passive: !0 }))
        : (window.removeEventListener("scroll", w),
          window.removeEventListener("resize", w));
    });
  });
  (h.observe(document.querySelector(".advantages")),
    $(".voice_list").slick({
      infinite: !0,
      autoplay: !1,
      pauseOnFocus: !1,
      pauseOnHover: !1,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: !0,
      centerMode: !0,
      arrows: !0,
      prevArrow:
        '<div class="slick-arrow-container slick-prev"><div class="slick-arrow"></div></div>',
      nextArrow:
        '<div class="slick-arrow-container slick-next"><div class="slick-arrow"></div></div>',
      centerPadding: "calc(80vw / 3 - 30px)",
      initialSlide: (slide_int = 1),
      lazyLoad: "ondemand",
    }));
});
