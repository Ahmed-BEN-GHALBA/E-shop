import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  products:any[] = []

  ngOnInit():void{
    this.loadAllProducts();
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((result:any)=>{
      this.products = result;
      console.log(result)
      console.log('test')
    })
  }

  constructor(private productService: ProductService){}
}
