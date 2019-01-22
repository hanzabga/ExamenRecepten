import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
import { ProductSearchComponent } from '../product-search/product-search.component';

@Component ({
   selector: 'product-add',
   templateUrl: './product-add.component.html'
})

export class ProductAddComponent {
   private model = new Product('', 0, '', 0);

   constructor(private productService: ProductService, private router: Router) {}

   onSubmit() {
       this.productService.addProduct(this.model);
       this.router.navigate(['/list']);
   }
}
