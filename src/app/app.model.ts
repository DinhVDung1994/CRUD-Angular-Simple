export class Product {

  id: number = 0;
  name: string = "";
  description: string = "";
  thumbnail: string = "";
  price: number = 0;
  quantily: number = 0;


  constructor(id: number, name: string, description: string, thumbnail: string, price: number, quantily: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.price = price;
    this.quantily = quantily;
  }

}
