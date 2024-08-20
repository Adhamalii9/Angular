import { Component } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      image: 'images/img-1.jpeg',
      price: 999.99,
      description: 'High-fidelity wireless headphones with advanced noise-cancelling technology for an immersive sound experience.'
    },
    {
      id: 2,
      name: 'Over-Ear Noise-Cancelling Headphones',
      image: 'images/img-2.jpg',
      price: 699.99,
      description: 'Comfortable over-ear headphones with active noise cancellation and superior sound quality.'
    },
    {
      id: 3,
      name: 'In-Ear Noise-Cancelling Earbuds',
      image: 'images/img-3.jpeg',
      price: 199.99,
      description: 'Compact in-ear earbuds with noise-cancelling capabilities and crystal-clear audio.'
    },
    {
      id: 4,
      name: 'Studio-Grade Headphones',
      image: 'images/img-1.jpeg',
      price: 249.99,
      description: 'Professional-grade headphones designed for studio monitoring with noise isolation and accurate sound reproduction.'
    },
    {
      id: 5,
      name: 'Wireless Over-Ear Headphones',
      image: 'images/img-2.jpg',
      price: 999.99,
      description: 'Premium wireless over-ear headphones with long battery life and advanced noise-cancelling features.'
    },
    {
      id: 6,
      name: 'Sports Noise-Cancelling Earbuds',
      image: 'images/img-3.jpeg',
      price: 699.99,
      description: 'Durable sports earbuds with noise cancellation and sweat-resistant design for active lifestyles.'
    },
    {
      id: 7,
      name: 'Compact Noise-Cancelling Headphones',
      image: 'images/img-1.jpeg',
      price: 199.99,
      description: 'Portable noise-cancelling headphones with foldable design and powerful sound performance.'
    },
    {
      id: 8,
      name: 'Gaming Headset with Noise Cancellation',
      image: 'images/img-2.jpg',
      price: 249.99,
      description: 'High-performance gaming headset with noise-cancelling microphone and immersive surround sound.'
    },
    {
      id: 9,
      name: 'Travel Noise-Cancelling Headphones',
      image: 'images/img-3.jpeg ',
      price: 249.99,
      description: 'Lightweight travel headphones with noise-cancelling technology, perfect for long journeys.'
    }
  ];
  

  // editProduct(id:any)
  // {
  //    this.products.forEach((p) => {
  //     if(p.id == id)
  //     {
  //       p.price = Math.round(p.price - p.price*0.25)
  //     }
  //   });
  // }

  editProduct(id:any)
  {
    for(var i = 0 ; i< this.products.length; i++)
    {
        
        if(this.products[i].id == id)
        {
          let product:IProduct = this.products[i];
          this.products[i] = {
            name : product.name,
            price : Math.round(product.price - product.price*0.25),
            description : product.description,
            image:product.image,
            id : product.id,
          }
        }
       
    }
  }

  removeProduct(id:any)
  {
    this.products = this.products.filter((products , i) => i!= id  );
  }
}
