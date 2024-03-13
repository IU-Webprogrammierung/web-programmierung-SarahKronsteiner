import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{

  slideIndex = 1;

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

plusSlides(n: number) {
  this.showSlides(this.slideIndex += n);
}


showSlides(n: number) {
  let i;
  let slides = document.getElementsByClassName("mySlides") as any;
  if (n > slides.length) {this.slideIndex = 1} 
  if (n < 1) {this.slideIndex = slides.length}
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[this.slideIndex-1].style.display = "block"; 
}
}
