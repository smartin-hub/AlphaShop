import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articoli, ApiMsg, Iva, FamAss } from 'src/app/articoli/articoli.component';
import { port, server } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  //server = "localhost";
  //port = "5051";

  constructor(private httpClient:HttpClient) { }

  /*getBasicAuthHeader(){
    let UserId = "smartin";
    let Password = "1234567890";
    let retVal = "Basic " + window.btoa(UserId + ":" + Password);
    return retVal;
  }*/

  getArticoliByDescription(descrizione: string) {
    
    /*let headers = new HttpHeaders(
      {Authorization: this.getBasicAuthHeader()}
    )*/

    return this.httpClient.get<Articoli[]>(`http://${server}:${port}/api/articoli/cerca/descrizione/${descrizione}`); //ALT + 0096 | ALT GR + '
    
  }

  getArticoliByCodArt(codart: string) {
    return this.httpClient.get<Articoli>(`http://${server}:${port}/api/articoli/cerca/codice/${codart}`);

  }

  getArticoliByEan(barcode: string) {
    return this.httpClient.get<Articoli>(`http://${server}:${port}/api/articoli/cerca/ean/${barcode}`);
  }

  getIva() {
    return this.httpClient.get<Iva>(`http://${server}:${port}/api/iva`);  
    
  }

  getCat() {
    return this.httpClient.get<FamAss>(`http://${server}:${port}/api/cat`);  
    
  }

  delArticoloByCodArt(codart: string) {
    return this.httpClient.delete<ApiMsg>(`http://${server}:${port}/api/articoli/elimina/${codart}`);
  }

  updArticolo(articolo: Articoli) {
    return this.httpClient.put<ApiMsg>(`http://${server}:${port}/api/articoli/modifica`, articolo);
  }

  insArticolo(articolo: Articoli) {
    return this.httpClient.post<ApiMsg>(`http://${server}:${port}/api/articoli/inserisci`, articolo);
  }
  
}
