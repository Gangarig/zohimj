import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'assets/images/main/1.jpeg', alt: '' },
    { src: 'assets/images/main/2.jpeg', alt: '' },
    { src: 'assets/images/main/3.jpeg', alt: '' },
    { src: 'assets/images/main/4.jpeg', alt: '' },
    { src: 'assets/images/main/5.jpeg', alt: '' },
    { src: 'assets/images/main/6.jpeg', alt: '' },
    { src: 'assets/images/main/7.jpeg', alt: '' },
    { src: 'assets/images/main/8.jpeg', alt: '' },
    { src: 'assets/images/main/9.jpeg', alt: '' },
    { src: 'assets/images/main/10.jpeg', alt: '' },
    { src: 'assets/images/main/11.jpeg', alt: '' },
    { src: 'assets/images/main/12.jpeg', alt: '' },
    { src: 'assets/images/main/13.jpeg', alt: '' },

  ];
}
