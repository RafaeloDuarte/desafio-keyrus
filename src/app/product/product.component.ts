import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../model/product.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.product = this.dataService.getProduct()
  }

}