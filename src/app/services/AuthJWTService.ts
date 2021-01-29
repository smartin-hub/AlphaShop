import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { authServerUri, port, server } from '../app.constants';

export const CONST_UTENTE = "Utente";
export const CONST_AUTH_TOKEN = "AuthToken";

export class AuthData {
  constructor(
    public codice:string,
    public messaggio: string
  ){}
}


@Injectable({
  providedIn: 'root'
})
export class AuthJWTService {

  constructor(private httpClient: HttpClient) { }

  //server = "localhost";
  //port = "5051";

 /* autentica(UserId, Password) {

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

    return this.httpClient.post<any>( 
      `${authServerUri}`, {UserId, Password}).pipe(
        map(
         data => {
          sessionStorage.setItem(CONST_UTENTE, UserId);
          sessionStorage.setItem(CONST_AUTH_TOKEN, `Bearer ${data.token}`);
          return data;
         } 
        )
      )
    }

  loggedUser() 
  {
    let utente = sessionStorage.getItem(CONST_UTENTE);

    return (sessionStorage.getItem(CONST_UTENTE) != null) ? utente : "";
  }

  getAuthToken() {
    if(this.loggedUser){
      return sessionStorage.getItem(CONST_AUTH_TOKEN);
    } else {
      return "";
    }
  }

  isLogged()
  {
    return (sessionStorage.getItem(CONST_UTENTE) != null) ? true : false;
  }

  clearAll()
  {
    sessionStorage.removeItem(CONST_UTENTE);
  }
  
}
