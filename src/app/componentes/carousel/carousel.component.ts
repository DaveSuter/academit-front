import { Component } from '@angular/core';
import { Card } from 'src/app/modelos/card';
import { Show } from 'src/app/modelos/show';
import { BannerService } from 'src/app/servicios/banner.service';

/*let slideIndex = 1;
const banners = [
  {
      img: "/assets/img/carrusel01.png",
      txt: "Show 1"
  },
  {
      img: "/assets/img/carrusel02.png",
      txt: "Show 2"
  },
  {
      img: "/assets/img/carrusel03.png",
      txt: "Show 3"
  }
];

let carousel:any = document.getElementById("carousel");

banners.map((element) =>
            carousel.innerHTML += `<img class="carousel-content" src="${element.img}" alt="${element.txt}">`
)
*/

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [BannerService]
})
export class CarouselComponent {

  arrayShows:Array<Card>;
  bannerActual:number = 0;

  constructor(private service:BannerService){}

  ngOnInit(): void {
    this.service
    .getBanners()
    .subscribe(response => this.arrayShows = response,
      (err) => {
        console.log(err)
      })

      setInterval(() =>{
        this.bannerActual = (this.bannerActual + 1) % this.arrayShows.length;
      }, 5000);
  }

  /*currentSlide(n:number) {
    this.showSlides(slideIndex = n);
  }
  
  plusSlides(n:number):void {
    this.showSlides(slideIndex += n);
  }
  
  showSlides(n:number): void {
    let slides:any = document.getElementsByClassName("carousel-content");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }*/

}

