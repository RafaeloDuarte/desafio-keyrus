import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

@Injectable() 
export class CarrinhoComponent implements OnInit {

  productList:Product[] = []
  emptyCart:boolean = true

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getProduct()
    this.productList = this.dataService.getCart()
    this.emptyCart = this.productList.length == 0
  }

  retirarDoCarrinho(product){
    this.dataService.retirarDoCarrinho(product)
    this.emptyCart = this.productList.length == 0
  }

}