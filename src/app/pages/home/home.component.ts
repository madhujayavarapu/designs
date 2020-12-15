import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image: 'https://gsr.dev/material2-carousel/assets/demo.png'
    },
    {
      image: 'https://gsr.dev/material2-carousel/assets/demo.png'
    },
    {
      image: 'https://gsr.dev/material2-carousel/assets/demo.png'
    },
    {
      image: 'https://gsr.dev/material2-carousel/assets/demo.png'
    },
    {
      image: 'https://gsr.dev/material2-carousel/assets/demo.png'
    },
  ];
  productImage: string = 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixid=' +
  'MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

  bookImage: string = 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixid=' +
  'MXwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

  products: any = [
    {image: this.productImage, name: 'Product Name', category: 'category', price: 599},
    {image: this.bookImage, name: 'Product Name', category: 'category', price: 799},
    {image: this.productImage, name: 'Product Name', category: 'category', price: 999},
    {image: this.bookImage, name: 'Product Name', category: 'category', price: 199},
    {image: this.productImage, name: 'Product Name', category: 'category', price: 399},
  ]
  constructor() {}

  ngOnInit() {}
}
