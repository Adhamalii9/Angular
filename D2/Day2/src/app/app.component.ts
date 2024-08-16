import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import { FormDataComponent } from "../components/form-data/form-data.component";
import { ProductsComponent } from "../components/products/products.component";
import { ITITracksComponent } from "../components/iti-tracks/iti-tracks.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormDataComponent, ProductsComponent, ITITracksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day2';

}
