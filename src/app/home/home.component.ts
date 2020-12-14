import { Component, OnInit } from '@angular/core';

declare var Swiper;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      autoplay: {
        delay: 5000,
      },
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
