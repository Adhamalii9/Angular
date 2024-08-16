import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  img: string;
  productName: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s',
      productName: 'Camera',
      price: 10000,
      quantity: 0
    },
    {
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      productName: 'Watch',
      price: 1500,
      quantity: 1
    },
    {
      img: 'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4=',
      productName: 'Mobile Phone',
      price: 2000,
      quantity: 30
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s',
      productName: 'Camera',
      price: 10000,
      quantity: 500
    },
    {
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      productName: 'Watch',
      price: 1500,
      quantity: 10
    },
    {
      img: 'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4=',
      productName: 'Mobile Phone',
      price: 2000,
      quantity: 1
    }
  ];
}
