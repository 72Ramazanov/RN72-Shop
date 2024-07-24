import { resolve } from 'node:path';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BasketComponent } from './components/basket/basket.component';
import { productResolver } from './services/product.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
    {path: '', component: BaseComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product/:id', component: ProductDetailsComponent, resolve: {data: productResolver}},
    { path: 'basket', component: BasketComponent },
    {path: '**', redirectTo: '', component: BaseComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 

export class AppRouting {}

