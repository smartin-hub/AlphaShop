import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient:HttpClient) { }

  getSaluti(nome) {
    
    return this.httpClient.get(`http://localhost:8050/api/saluti/${nome}`); //ALT + 0096 | ALT GR + '
    //console.log("Saluti");
  }
}
