import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL='http://localhost:5000'
  // searchTerm: any;
//to hold search term
searchTerm= new BehaviorSubject('')
  constructor( private http:HttpClient) { }
  //get all products
  getAllProducts(){
    return this.http.get(`${this.BASE_URL}/products/all-products`)
  
  
  }
  //view parti product
  viewProduct(id:any){
    return this.http.get(`${this.BASE_URL}/products/viewproduct/${id}`)
    }
}
