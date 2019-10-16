import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

@Injectable() 
export class CarrinhoComponent implements OnInit {

  productList:Product[]
  emptyCart:boolean = true
  @Output() customerEmit = new EventEmitter<Product[]>()

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getProduct()
    this.productList = this.dataService.getCart();
    if(this.productList.length != 0){
      this.emptyCart=false
    }
  }

  retirarDoCarrinho(product){
    this.dataService.retirarDoCarrinho(product);
  }

}