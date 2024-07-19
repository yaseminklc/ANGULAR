import { Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export const routes: Routes = [
    {path:"", pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes),CommonModule],
    exports:[RouterModule]
})

export class AppRoutingModule{ }