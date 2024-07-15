import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { ProductComponent } from "./components/product/product.component";
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoryComponent, NaviComponent, ProductComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'my-first-project';
  user= 'Yasemin Kiliç'
 
}
