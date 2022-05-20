(function ($) {
  $(function () {
    $(document).ready(function () {
      onShowHamberMobile();
      onCloseHamberMobile();
      onScrollTop();
      liveSlickPartNer();
      teamItemHover();
      bannerSlickInner();
      countDownTime();
      countingNumber();
      AOS.init({
        duration: 500
      });
      $(window).scroll(function () {
        countingNumber();
      });
    });


    function countingNumber() {
      let valueDisplays = document.querySelectorAll(".counter");
      
      if($(window).scrollTop() > 3500) {
        valueDisplays.forEach((valueDisplay) => {
        let startNum = 0;
        let endNum = parseInt(valueDisplay.getAttribute("data-value"));
        let duration = Math.floor(1500/endNum);
        let counter = setInterval(() => {
          startNum += 1;
          valueDisplay.textContent =  startNum;
          if (startNum == endNum) {
            clearInterval(counter);
          }
        },duration)
      })
      } 
    }

    function countDownTime() {
      let hours = 22;
      let minutes = 50;
      let seconds = 12;
      
      const time = setInterval(() => {
        seconds = seconds - 1;
        if (seconds == 0) {
          seconds = 60;
          minutes = minutes - 1;
          if (minutes == 0) {
            minutes = 60;
            hours = hours - 1;
            if (hours == 0) hours = 12;
          }
        }
        if (hours == 0) {
          clearInterval(time);
        }
        $(".timer .hours").html(`${hours}<span>H</span>`);
        $(".timer .minutes").html(`${minutes}<span>M</span>`);
        $(".timer .seconds").html(`${seconds}<span>S</span>`);
      },1000)
    }


    function teamItemHover() {
      $(".team-item").hover(
        function () {
          $(".team-item").addClass("active-shape");
        },
        function () {
          $(".team-item").removeClass("active-shape");
        }
      )
      $(".previous-item").hover(
        function () {
          $(".previous-item").addClass("active-shape");
        },
        function () {
          $(".previous-item").removeClass("active-shape");
        }
      )
      $(".project-item").hover(
        function () {
          $(".project-item").addClass("active-shape");
        },
        function () {
          $(".project-item").removeClass("active-shape");
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

    function bannerSlickInner() {
      $(".banner-slider-inner")
        .not(".slick-initialized")
        .slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          // autoplay: true,
          arrows: true,
          autoplaySpeed: 0,
					speed: 2500,
        });
    }

    function liveSlickPartNer() {
      $(".slick-partner")
        .not(".slick-initialized")
        .slick({
          // dots: false,
          // infinite: false,
          // speed: 300,
          slidesToShow: 5,
          slidesToScroll: 2,
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
