import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

export type Product = {
  _id: string | number;
  name: string;
  price: number;
  image: string;
  description?: string;
};
@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css',
})
export class HomePagesComponent {
  products: Product[] = [];

  productService = inject(ApiService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (product) => (this.products = product.data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }
}
