(function($) {
	
	"use strict";

	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
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
	
	headerStyle();

	function leftOuterContainer() {
		if ($(".left-outer-container").length) {
			var windowSize = $(window).width();

			if (windowSize >= 1200) {
				var width = ($(window).width() - 1170),
					LOC = (width / 2);
				$(".left-outer-container").css("margin-left", LOC);
			}			
		}
	}
	leftOuterContainer();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
	}

	//Hidden Sidebar
	if($('.hidden-sidebar').length){

		var animButton = $(".sidemenu-nav-toggler"),
	        hiddenBar = $(".hidden-sidebar"),
	        navOverlay = $(".nav-overlay"),
	        hiddenBarClose = $(".hidden-sidebar-close");

	    function showMenu() {
	        TweenMax.to(hiddenBar, 0.6, {
	            force3D: false,
	            left: "0",
	            ease: Expo.easeInOut
	        });
	        hiddenBar.removeClass("close-sidebar");
	    	navOverlay.fadeIn(500);
	    }

	    function hideMenu() {
	        TweenMax.to(hiddenBar, 0.6, {
	            force3D: false,
	            left: "-480px",
	            ease: Expo.easeInOut
	        });
	        hiddenBar.addClass("close-sidebar");
	        navOverlay.fadeOut(500);
	    }
	    animButton.on("click", function() {
	        if (hiddenBar.hasClass("close-sidebar")) showMenu();
	        else hideMenu();
	    });
	    navOverlay.on("click", function() {
	    	hideMenu();
	    });
	    hiddenBarClose.on("click", function() {
	    	hideMenu();
	    });
	}

	if ($('.nav-overlay').length) {
		// / cursor /
		var cursor = $(".nav-overlay .cursor"),
		follower = $(".nav-overlay .cursor-follower");

		var posX = 0,
		posY = 0;

		var mouseX = 0,
		mouseY = 0;

		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function() {
				posX += (mouseX - posX) / 9;
				posY += (mouseY - posY) / 9;

				TweenMax.set(follower, {
					css: { 
						left: posX - 22,
						top: posY - 22
					}
				});

				TweenMax.set(cursor, {
					css: { 
						left: mouseX,
						top: mouseY
					}
				});

			}
		});

		$(document).on("mousemove", function(e) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			mouseX = e.pageX;
			mouseY = e.pageY - scrollTop;
		});
		$("button, a").on("mouseenter", function() {
			cursor.addClass("active");
			follower.addClass("active");
		});
		$("button, a").on("mouseleave", function() {
			cursor.removeClass("active");
			follower.removeClass("active");
		});
		$(".nav-overlay").on("mouseenter", function() {
			cursor.addClass("close-cursor");
			follower.addClass("close-cursor");
		});
		$(".nav-overlay").on("mouseleave", function() {
			cursor.removeClass("close-cursor");
			follower.removeClass("close-cursor");
		});
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		$(".mobile-menu .menu-box").niceScroll({
			cursorborder: "none",
			cursorborderradius: "0px",
			touchbehavior: true,
			bouncescroll: false,
			scrollspeed: 120,
			mousescrollstep: 90,
			horizrailenabled: true,
			preservenativescrolling: true,
			cursordragontouch: true
		});
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn,.scroll-nav li a').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Sidemenu Nav Hide Show
	if($('.side-menu').length){
		
		$(".side-menu .menu-box").niceScroll({
			cursorborder: "none",
			cursorborderradius: "0px",
			touchbehavior: true,
			bouncescroll: false,
			scrollspeed: 120,
			mousescrollstep: 90,
			horizrailenabled: true,
			preservenativescrolling: true,
			cursordragontouch: true
		});
		
		//Dropdown Button
		$('.side-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});

		$('body').addClass('side-menu-visible');
		//Menu Toggle Btn
		$('.side-nav-toggler').on('click', function() {
			$('body').addClass('side-menu-visible');
		});

		//Menu Toggle Btn
		$('.side-menu .side-menu-resize').on('click', function() {
			$('body').toggleClass('side-menu-visible');
		});

		//Menu Toggle Btn
		$('.main-header .mobile-nav-toggler-two').on('click', function() {
			$('body').addClass('side-menu-visible-s2');
		});

		//Menu Overlay
		$('.main-header .side-menu-overlay').on('click', function() {
			$('body').removeClass('side-menu-visible-s2');
		});
	}
	
	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}

	function bannerSlider() {
	    if ($(".banner-slider").length > 0) {

		    // Banner Slider
			var bannerSlider = new Swiper('.banner-slider', {
				preloadImages: false,
                loop: true,
                grabCursor: true,
                centeredSlides: false,
                resistance: true,
                resistanceRatio: 0.6,
                speed: 1400,
                spaceBetween: 0,
                parallax: false,
                effect: "slide",
				autoplay: {
				    delay: 6000,
                    disableOnInteraction: false
				},
				pagination: {
	                el: '.banner-slider-pagination',
	                clickable: true,
	            },
	            navigation: {
	                nextEl: '.banner-slider-button-next',
	                prevEl: '.banner-slider-button-prev',
	            },
			});
		}
	}
	
	/////////////////////////////
		//Universal Code for All Owl Carousel Sliders
	/////////////////////////////
	
	if ($('.theme_carousel').length) {
			$(".theme_carousel").each(function (index) {
			var $owlAttr = {},
			$extraAttr = $(this).data("options");
			$.extend($owlAttr, $extraAttr);
			$(this).owlCarousel($owlAttr);
		});
	}
	
	// Donation Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}

	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});
	}
	

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Sortable Masonary with Filters
	function sortableMasonry() {
		if ($('.sortable-masonry').length) {
			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');
			$container.isotope({
				filter: '.all',
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});
			// Isotope Filter 
			$filter.find('li').on('click', function() {
				var selector = $(this).attr('data-filter');
				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {}
				return false;
			});
			winDow.on('resize', function() {
				var selector = $filter.find('li.active').attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
				$container.isotope()
			});
			var filterItemA = $('.filter-btns li');
			filterItemA.on('click', function() {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
			$container.isotope("on", "layoutComplete", function(a, b) {
                var a = b.length,
                pcn = $(".filters .count");
                pcn.html(a);                
            }); 
		}
	}
	sortableMasonry();

	//Progress Bar / Levels
	if ($('.progress-levels .progress-box .bar-fill').length) {
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width', progressWidth + '%');
			$(this).children('.percent').html(progressWidth + '%');
		});
	}

	// Scroll to a Specific Div
	var offset = 220;
	var duration = 500;
	jQuery(window).on('scroll', function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});

	jQuery('.back-to-top').on("click", function(e) {
		e.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});

	if ($('.ajax-sub-form').length > 0) {
	    $('.ajax-sub-form').ajaxChimp({
	          language: 'es',
	          url: "https://gmail.us17.list-manage.com/subscribe/post?u=8a43765a655b07d21fa500e4e&amp;id=2eda0a58a7" //Replace this with your mailchimp post URL.
	    });

	    $.ajaxChimp.translations.es = {
	        'submit': 'Submitting...',
	        0: 'Thanks for your subscription',
	        1: 'Please enter a valid email',
	        2: 'An email address must contain a single @',
	        3: 'The domain portion of the email address is invalid (the portion after the @: )',
	        4: 'The username portion of the email address is invalid (the portion before the @: )',
	        5: 'This email address looks fake or invalid. Please enter a real email address'
	    };
	}

	// Testimonial 
	var testimonialThumbs = new Swiper('.testimonial-thumbs', {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 3,
		allowTouchMove: false,
		freeMode: true,
		speed: 1400,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		autoplay: {
			delay: 5000,
		},
	});
	var totalSlides = $(".swiper-container").length;
	var galleryTop = new Swiper('.testimonial-content', {
		spaceBetween: 10,
		slidesPerView: 1,
		mousewheel: true,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		speed: 1400,
		navigation: {
			nextEl: '.testimonial-slider-button-next',
			prevEl: '.testimonial-slider-button-prev',
		},
		thumbs: {
			swiper: testimonialThumbs
		}
	});

	

	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}





/* ==========================================================================
   When document is resize
   ========================================================================== */
	
   jQuery(window).on('resize', function() {
	leftOuterContainer();
	});


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
   jQuery(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
   jQuery(window).on('load', function() {
		sortableMasonry();
		bannerSlider();		
	});	

})(window.jQuery);