import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { FootComponent } from './components/foot/foot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent,HeaderComponent,ProductComponent,FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProject';
}
