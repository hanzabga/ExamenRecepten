import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component ({
   selector: 'product-delete',
   templateUrl: './product-delete.component.html'
})

export class ProductDeleteComponent {
    delete: FormGroup;

    ngOnInit() {
       this.delete = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private productService: ProductService, private router: Router) {}

   onSubmit() {
       this.productService.deleteProduct(this.delete.value.name);
       this.router.navigate(['/list']);
   }
}
