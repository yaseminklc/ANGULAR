import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { ProductComponent } from "./components/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryComponent, NaviComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  user= 'Yasemin Kiliç'
 
}
