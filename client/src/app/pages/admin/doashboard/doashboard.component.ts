import { Component, inject } from '@angular/core';
import { Product } from '../../home-pages/home-pages.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-doashboard',
  standalone: true,
  imports: [],
  templateUrl: './doashboard.component.html',
  styleUrl: './doashboard.component.css',
})
export class DoashboardComponent {
  products: Product[] = [];

  productService = inject(ApiService);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (product) => (this.products = product.data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }
}
