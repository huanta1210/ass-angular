import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../pages/home-pages/home-pages.component';
type apiService = {
  message: string;
  data: Product[];
};
type apiServiceDetail = {
  message: string;
  data: Product;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getAllProducts() {
    return this.http.get<apiService>('http://localhost:8000/api/products');
  }
  getDetail(id: string | number) {
    return this.http.get<apiServiceDetail>(
      `http://localhost:8000/api/products/${id}`
    );
  }
  handleDelete(id: string) {
    return this.http.delete(
      `http://localhost:8000/api/products/delete-product/${id}`
    );
  }
}
