import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ShareReplayConfig } from 'rxjs';
import { Shoe } from './shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  private baseURL = "http://localhost:8080/api/v1/shoes"


  constructor(private httpClient: HttpClient) { }


  getShoesList(): Observable<Shoe[]>{
    console.log(this.httpClient.get<Shoe[]>(`${this.baseURL}`));
    return this.httpClient.get<Shoe[]>(this.baseURL);
  }

  createShoe(shoe: Shoe): Observable<Object>{
    return this.httpClient.post(this.baseURL, shoe)
  }

  updateShoe(id: number,shoe: Shoe): Observable<Object>{
    return this.httpClient.post(this.baseURL, shoe)
  }

  getShoeById(id:number): Observable<Shoe>{
    return this.httpClient.get<Shoe>(`${this.baseURL}/${id}`);
  }

  deleteShoe(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
