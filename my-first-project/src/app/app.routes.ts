import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { BrowserModule } from '@angular/platform-browser';



export const routes: Routes = [
    {path:"", pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent},
    {path:"products/add", component:ProductAddComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes),BrowserModule],
    exports:[RouterModule]
})

export class AppRoutingModule{ }