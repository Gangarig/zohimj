import { Component, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any; // if you're using jQuery

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
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
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function(this: any) {
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
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function(this: any) {
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

    if($(this.el.nativeElement).find('.mobile-menu').length){

    }
  }


}
