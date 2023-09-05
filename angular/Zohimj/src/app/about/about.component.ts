import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit() {
    const testimonialThumbs = new Swiper('.testimonial-thumbs', {
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
    } as any);


    const galleryTop = new Swiper('.testimonial-content', {
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
  }
}
