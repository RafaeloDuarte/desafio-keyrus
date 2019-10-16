import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = 'http://challenge-front-end.us-east-2.elasticbeanstalk.com'
  headers = new HttpHeaders().set('Accept', 'application/json;charset=UTF-8')
  public prod = new Product()
  public carrinho:Product[] = []

  constructor(private http: HttpClient) { }

  // getProduct(): Observable<any>{
  //   //this.http.head.arguments("Access-Control-Allow-Methods","GET, POST","Access-Control-Allow-Origin","*")
  //   this.headers = this.headers.append('Access-Control-Allow-Methods','GET, POST')
  //   this.headers = this.headers.append('Access-Control-Allow-Origin','*')
  //   return this.http.get<Product[]>(`${this.baseUrl}/retrieve-product/products`,{headers:this.headers});
  // }

  getProduct():Product{
    return this.prod
  }

  setProduct(produto:Product){
    this.prod = produto
  }

  getCart():Product[]{
    return this.carrinho
  }

  adicionarAoCarrinho(produto:Product){
    this.carrinho.push(produto)
  }

  retirarDoCarrinho(produto:Product){
    console.log('retirando')
    this.carrinho.splice(this.carrinho.indexOf(produto), 1);
  }

}
