import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
 private model = new Product('', 0, '', 0);

 constructor(private productService: ProductService, private router: Router) {}

 onSubmit() {
     this.productService.editProduct(this.model);
     this.router.navigate(['/list']);
 }
}
