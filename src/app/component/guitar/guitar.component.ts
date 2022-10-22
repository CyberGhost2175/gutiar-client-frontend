import { Component, Input, OnInit } from '@angular/core';
import { Guitar } from 'src/app/model/guitar';
import { CartService } from 'src/app/service/cart.service';
import { GuitarsService } from 'src/app/service/guitars.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent  {
  public productList : any ;
  @Input() guitar: Guitar;

  details = false
  constructor(private cartService : CartService){}
  addtocart(item: Guitar){
    this.cartService.addtoCart(item);
  }
}
