import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../../models/responseModel';
import { ProductService } from '../../services/product.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';


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
  
  constructor(private productService:ProductService, private activedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.activedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
      this.getProductsByCategory(params["categoryId"])
    }else{
      this.getProducts()
    }
   })
  }
   
   getProducts(){
this.productService.getProducts().subscribe(response=>{
  this.products=response.data
  this.dataLoaded=true;
})
   
   }

   getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
       
       }
}
