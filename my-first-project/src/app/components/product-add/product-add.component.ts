import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{

  productAdddForm:FormGroup;
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  
  createProductAddForm() {}
}
