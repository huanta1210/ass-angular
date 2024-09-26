import { Component, inject } from '@angular/core';
import { Product } from '../home-pages/home-pages.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  product: Product | null = null;
  productService = inject(ApiService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService.getDetail(params['id']).subscribe({
        next: (data) => (this.product = data.data),
        error: (error) =>
          console.error('Error fetching product details:', error),
      });
    });
  }
}
