import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../../models/responseModel';
import { ProductResponseModel } from '../../models/productResponseModel';
import { ProductService } from '../../services/product.service';
import { response } from 'express';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded= false;
  
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
   
   getProducts(){
this.productService.getProducts().subscribe(response=>{
  this.products=response.data
  this.dataLoaded=true;
})
   
   }
}
