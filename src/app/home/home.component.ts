import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-product-list></app-product-list>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
