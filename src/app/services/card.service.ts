import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) {}

  getCards(url:any){
    return this.http.get(url)
  }
}
