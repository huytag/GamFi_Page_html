(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberMobile();
      onCloseHamberMobile();
      onScrollTop();
      liveSlickPartNer();
      teamItemHover();
    });

    function teamItemHover() {
      $(".team-item").hover(
        function () {
          $(".team-item").addClass("active-shape");
        },
        function () {
          $(".team-item").removeClass("active-shape");
        }
      )
    }


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

    function liveSlickPartNer() {
      $(".slick-partner")
        .not(".slick-initialized")
        .slick({
          // dots: false,
          // infinite: false,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          autoplay: true,
          arrows: true,
          autoplaySpeed: 0,
					speed: 5000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
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
