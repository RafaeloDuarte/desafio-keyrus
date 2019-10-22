import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './navigation/carrinho/carrinho.component';
import { ProductComponent } from './product/product.component'
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'carrinho',component:CarrinhoComponent},
  {path:'produto',component:ProductComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
