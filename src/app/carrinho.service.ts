import { Injectable } from '@angular/core';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  constructor(private carrinhoList: CarrinhoComponent, private service:DataService) { }

  ngOnInit() {
    this.carrinhoList.customerEmit.subscribe(
      customerEmitido => this.carrinhoList = customerEmitido
    )
  }

  deleteCartItem(){
    
  }

}