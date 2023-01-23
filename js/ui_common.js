$(function () {
  $('#header .gnb').on('mouseenter', function () {
    var st = $(window).scrollTop();

    if (st >= 700) {
      $('#header').addClass('on');
    }

    // header:hover 색상 변경
    if (st < 700) {
      $('#header').addClass('on2');
    }
  });

  $('#header .gnb').on('mouseleave', function () {
    $('#header').removeClass('on2');
  });

  // header 스크롤 흰색
  var header = $('#header');

  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 1000) {
        header.addClass('on');
      } else {
        header.removeClass('on');
      }
    })
    .trigger('scroll');

  // main text animate
  $('[class*=animate_fade]').each(function (i, v) {
    var _this = $(this);

    $(window)
      .on('scroll', function () {
        var posY = _this.offset().top;
        var ani = $(this).scrollTop();

        if (ani >= posY - $(this).outerHeight()) {
          _this.addClass('on');
        }
      })
      .trigger('scroll');
  });

  // main slider
  var mainSlider = new Swiper('.main_slider', {
    speed: 2000,
    loop: true,
    simulateTouch: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //youtube modal
  $('.modal_wrap .btn_play').on('click', function(e) {
    e.preventDefault();
    $('.modal_wrap .youtube_modal').fadeIn().addClass('on');
  });
  
  $('.modal_wrap .youtube_modal .btn_close').on('click',function () {
    $('.modal_wrap .youtube_modal').hide().removeClass('on');
  })
  
  $('.modal_wrap .youtube_modal .bg_close').on('click', function(e) {
    e.preventDefault();
    $('.modal_wrap .youtube_modal').hide().removeClass('on');
  });


  //story 탭메뉴

    $('.contents .tab_wrap li').on('click', function (e) {
      e.preventDefault();
      var idx = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
  
      $('.contents .tab_content_wrap .story').eq(idx).addClass('on').siblings().removeClass('on');
    });

});
