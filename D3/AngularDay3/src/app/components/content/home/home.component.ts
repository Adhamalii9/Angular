import { Component } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";
import { ProductssliderComponent } from "./productsslider/productsslider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ProductssliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
