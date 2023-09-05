import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as $ from 'jquery';


(function($: any) {
  "use strict";

  //Header Style
  function headerStyle(): void {
    if ($('.main-header').length) {
      let windowpos = $(window).scrollTop();
      let siteHeader = $('.main-header');
      let scrollLink = $('.scroll-to-top');
      let sticky_header = $('.main-header .sticky-header');
      if (windowpos > 100) {
        siteHeader.addClass('fixed-header');
        sticky_header.addClass("animated slideInDown");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass('fixed-header');
        sticky_header.removeClass("animated slideInDown");
        scrollLink.fadeOut(300);
      }
    }
  }

  //Submenu Dropdown Toggle
  function subMenuToggle(): void {
    const $dropdown = $(".main-header li.dropdown > a");
    $dropdown.on('click', function(this: any) {
      $(this).parent().addClass('open');
      return false;
    });
  }

  //Mobile Navigation
  function mobileNavToggler(): void {
    if ($('.mobile-menu').length) {
      $('.mobile-menu .menu-box').append('<div class="close-btn"><span class="icon flaticon-cancel"></span></div>');
      $('.mobile-menu li.dropdown .dropdown-btn').append('<span class="fa fa-caret-down"></span>');
      $('.mobile-menu li.dropdown').append('<ul></ul>');
      $('.mobile-menu .menu-box .nav li.dropdown > a').on('click', function(this: any) {
        $(this).next('ul').slideToggle(500);
      });
    }
  }

  // Main Slider Carousel
  function mainSlider(): void {
    if ($('.main-slider .tp-banner').length) {
      const MainSliderCarousel = $('.main-slider .tp-banner');
      MainSliderCarousel.revolution({
        delay: 5000,
        startwidth: 1200,
        startheight: 850,
        startWithSlide: 0,

        fullScreenAlignForce: "off",
        autoHeight: "off",
        minHeight: "off",

        shuffle: "off",

        onHoverStop: "on",

        thumbWidth: 80,
        thumbHeight: 50,
        thumbAmount: 5,

        navigationType: "bullet",
        navigationArrows: "0",
        navigationStyle: "preview4",

        touchenabled: "on",


        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,

        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

        keyboardNavigation: "on",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",

        spinner: "spinner4",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,

        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,

      });
    }
  }

  // Scroll to Top
  function scrolltotop(): void {
    if($('.scroll-to-top').length) {
      $('.scroll-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        return false;
      });
    }
  }

  // Initializing Functions
  function init(): void {
    headerStyle();
    subMenuToggle();
    mobileNavToggler();
    mainSlider();
    scrolltotop();
  }

  // Document ready function
  $(document).on('ready', function() {
    init();
  });

  // Window load function
  $(window).on('load', function() {
    // code here
  });

  // Window scroll function
  $(window).on('scroll', function() {
    headerStyle();
  });

})(jQuery);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
