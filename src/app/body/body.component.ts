import {Component, OnInit} from '@angular/core';
import {Product} from "../app.model";



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  product:Product = new Product(0,"","","",0,0);
  products:Product[] = [
    {
      id: 1,
      name: 'Mỹ Đô Toa Nữ Vương',
      description: 'Vợ Cả Tiên Ka',
      thumbnail: 'http://wegamers.176.com/GameIM/SNS/Image/20220419901609259202668970',
      price: 5.99,
      quantily: 1
    },
    {
      id: 2,
      name: 'Vân Chi Cung Chủ Vân Lam Tông',
      description: 'Người Tình Trong Mộng Của Tiêu Ka',
      thumbnail: 'https://i.pinimg.com/736x/d9/29/41/d9294151abd339a752fcad1b388f0ef8.jpg',
      price: 1000,
      quantily: 20
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  removeProduct(param: number):void {
    const index = this.products.findIndex(a => a.id === param);
    this.products.splice(index,1);
  }
  showeditProduct(product:Product):void{
   this.product = new Product(product.id,product.name,product.description,product.thumbnail,product.price,product.quantily,)
  }
  updateProduct(id:number):void{
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id){
        this.products[i].id = this.product.id;
        this.products[i].name = this.product.name;
        this.products[i].description = this.product.description;
        this.products[i].price = this.product.price;
        this.products[i].thumbnail = this.product.thumbnail;
        this.products[i].quantily = this.product.quantily;
      }
    }
  }
  createProduct(id:number){
    let check =true;
    console.log('ID Nhap vao===',id)
    for (let i = 0; i < this.products.length; i++) {
      // console.log(i)
      if (this.products[i].id == id){
        console.log(this.products[i].id)
        alert("ID Sản Phẩm Đã Tồn Tại")
        check = false;
       break;
      }
    }
    if (check){
      this.products.push(new Product(this.product.id,this.product.name,this.product.description,this.product.thumbnail,this.product.price,this.product.quantily))
      alert("Create Successfully!")

    }
  }

    detailsProduct(product:Product):void{
      this.product = new Product(product.id,product.name,product.description,product.thumbnail,product.price,product.quantily,)
    }

}
