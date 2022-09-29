"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------登入頁設定----------------------

  $('.js-toggle-menu').find('input').click(function () {
    $(this).parents('.js-toggle-menu').find('.form-check').removeClass('active');
    $(this).parent('.form-check').addClass('active');
  }); //---------------------首頁輪播設定------------------------

  var slide_btn = $('.js-slider').find('button');
  var bar = $('.js-bar');
  var barWidth = 0;
  var to_play;
  var to_stop;
  $('.js-slider').carousel({
    pause: "false"
  });
  bar.css("width", barWidth + "%");
  autoplay();
  slide_btn.click(function () {
    clearTimeout(to_play);
    clearTimeout(to_stop);
    autoplay();
  });

  function autoplay() {
    resetAnimation();
    to_play = setTimeout(autoplay, 5000);
  }

  ;

  function resetAnimation() {
    barWidth = 0;
    bar.css("width", barWidth + "%");
    bar.removeClass("animate").addClass("stopanimation");
    to_stop = setTimeout(startAnimation, 10);
  }

  ;

  function startAnimation() {
    barWidth = 100;
    bar.removeClass("stopanimation").addClass("animate");
    bar.css("width", 100 + "%");
  }

  ; //---------------------首頁影片設定------------------------

  $('.js-media-video').click(function () {
    var thisYoutubeId = $(this).attr('data-youtube-id');
    var video = '' + '<iframe id="video' + thisYoutubeId + '"' + 'src="' + $(this).attr('data-video') + '?autoplay=1&mute=1' + '"' + ' webkitAllowFullScreen mozallowfullscreen allowFullScreen' + ' frameBorder="0"' + ' data-ytid="' + thisYoutubeId + '"></iframe>';
    $(this).replaceWith(video);
  }); //---------------------頁籤設定------------------------

  $('.js-toggle-menu').find('.js-toggle-button').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.js-toggle-button').removeClass('active');
  }); //----------------gotop功能-----------------

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //若目前的位置距離網頁頂端>100px
      $('.gotop').fadeIn('fast');
    } else {
      $('.gotop').stop().fadeOut('fast');
    }

    var index = 0; //各單元區塊順序

    var st = $(window).scrollTop(); //現在捲軸位置

    var wh = $(window).height(); //視窗高度
  });
  RESIZE();
  $(window).resize(function () {
    RESIZE();
  });

  function RESIZE() {
    WINDOWH = $(window).height();
    WINDOW = $(window).width();

    if (WINDOW > 1199) {
      $('.js-nav-dropdown').hover(function () {
        $(this).find('.dropdown-menu').toggleClass('show');
      });
    } else {
      '.dropdown-menu'.removeClass('show');
      $('.js-nav-dropdown').click(function () {
        $(this).find('.dropdown-menu').toggleClass('show');
      });
    }
  }
}); //JS尾端
//# sourceMappingURL=script.js.map
