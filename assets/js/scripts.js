(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberMobile();
      onCloseHamberMobile();
      onScrollTop();
    });

    function onScrollTop() {
      const elClick = $("#srcoll-Up");
      if(elClick.length > 0) {
        elClick.on("click", () => {
          $(window).scrollTop(0);
        });
      }
    }

    function onShowHamberMobile() {
      const elHamber = $(".hamber-mb");
      const elBtn = $(".nav-expander");
      if (elBtn.length > 0) {
        elBtn.on("click", () => {
            elHamber.addClass("is-active");
        });
      }
    }
    

    function onCloseHamberMobile() {
      const elHamber = $(".hamber-mb");
      const elBtn = $(".btn-close");
      if(elBtn.length > 0 ) {
        elBtn.on("click", () => {
          elHamber.removeClass("is-active");
        })
      }
    }

    function liveSlickListTopFooter() {
      $(".slick-list-top-header")
        .not(".slick-initialized")
        .slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                prevArrow: false,
                nextArrow: false,
              },
            },
          ],
        });
    }
  });
})(jQuery);
