import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:4000';
   private contentHeaders: HttpHeaders;

   constructor(private http: HttpClient) {
      this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   }

   // Get all products
   getAllProducts(): Observable<Product[]> {
      let url = `${this.productsServiceURI}/list`;

      return this.http.get<Product[]>(url);
   }

   // Insert a new product
   addProduct(product: Product): void {
      let url = `${this.productsServiceURI}/add`;
      // !!! subscribe is needed to execute POST
      this.http.post(url, product.toForm(),
                    { headers: this.contentHeaders })
                    .subscribe();
   }

   // Insert a new product
   editProduct(product: Product): void {
      let url = `${this.productsServiceURI}/edit`;
      // !!! subscribe is needed to execute POST
      this.http.post(url, product.toForm(),
                    { headers: this.contentHeaders })
                    .subscribe();
   }

   // Get a product based on the name
   searchProduct(name: string): Observable<Product> {
      let url = `${this.productsServiceURI}/search`;

      return this.http.post<Product>(url, `name=${name}`,
                    { headers: this.contentHeaders });
   }

   // Delete a product
   deleteProduct(name: string): void {
      let url = `${this.productsServiceURI}/${name}`;

      this.http.delete(url,
                    { headers: this.contentHeaders })
                    .subscribe();
   }
}
