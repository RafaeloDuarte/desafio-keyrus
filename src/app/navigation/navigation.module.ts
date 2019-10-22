import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path:'carrinho',component:CarrinhoComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    NavbarComponent,
    CarrinhoComponent
  ],
  exports:[
    NavbarComponent,
    CarrinhoComponent,
    RouterModule
  ]
})
export class NavigationModule { }
