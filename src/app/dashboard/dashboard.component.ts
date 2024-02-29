import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data: any=[];
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.getProducts();
    
  }
  
  getProducts(){
    this.httpClient.get(`https://fakestoreapi.com/products`).subscribe(res => this.data=res);
  }

}
