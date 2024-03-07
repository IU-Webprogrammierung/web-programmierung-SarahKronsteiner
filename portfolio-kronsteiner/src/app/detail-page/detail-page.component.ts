import { Component } from '@angular/core';
import { DetailHeaderComponent } from '../detail-header/detail-header.component';
import { SliderComponent } from '../slider/slider.component';
import { TextElementComponent } from '../text-element/text-element.component';
import { WireframesComponent } from '../wireframes/wireframes.component';
import { FinalProductComponent } from '../final-product/final-product.component';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [DetailHeaderComponent, SliderComponent, TextElementComponent, WireframesComponent, FinalProductComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

}
