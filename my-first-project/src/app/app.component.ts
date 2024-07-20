import { Component, NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ProductComponent,
    BrowserAnimationsModule,
    RouterModule,
    CategoryComponent,
    NaviComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AppComponent {
  title = 'my-first-project';
  user = 'Yasemin Kiliç';
}
