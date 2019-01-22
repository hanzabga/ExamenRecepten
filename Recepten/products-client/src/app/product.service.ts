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

  getAllProducts(): Observable<Product[]> {
      let url = `${this.productsServiceURI}/list`;

      return this.http.get<Product[]>(url);
  }

}
