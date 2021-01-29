import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { StringDecoder } from 'string_decoder';
import { port, server } from '../app.constants';

export class AuthData {
  constructor(
    public codice:string,
    public messaggio: string
  ){}
}


@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor(private httpClient: HttpClient) { }

  //server = "localhost";
  //port = "5051";

  /*autentica = (UserId: string, Password: String) : boolean => {

    if (UserId === 'Nicola' && Password === '123_Stella') 
    {
      sessionStorage.setItem("Utente", UserId);
      return true;
    }
    else 
    {
      return false;
    }
  }*/

  autenticaService (UserId: string, Password: string){
    let AuthString = "Basic " + window.btoa(UserId + ":" + Password);

    let headers = new HttpHeaders(
      {Authorization: AuthString}
    )
    return this.httpClient.get<AuthData>( 
      `http://${server}:${port}/api/articoli/test`, {headers}).pipe(
        map(
         data => {
          sessionStorage.setItem("Utente", UserId);
          sessionStorage.setItem("AuthToken", AuthString);
          return data;
         } 
        )
      )
    }

  loggedUser() 
  {
    let utente = sessionStorage.getItem("Utente");

    return (sessionStorage.getItem("Utente") != null) ? utente : "";
  }

  getAuthToken() {
    if(this.loggedUser){
      return sessionStorage.getItem("AuthToken");
    } else {
      return "";
    }
  }

  isLogged = () => (sessionStorage.getItem("Utente") != null) ? true : false;
  
  clearAll = () => sessionStorage.removeItem("Utente");
  
  
}
