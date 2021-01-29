import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthappService } from '../authapp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptService implements HttpInterceptor {

  constructor(private BasicAuth:AuthappService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    /*let UserId = "smartin";
    let Password = "1234567890";
    let AuthHeader = "Basic " + window.btoa(UserId + ":" + Password);
*/
  let AuthToken = this.BasicAuth.getAuthToken();
  let User = this.BasicAuth.loggedUser();

  if(AuthToken && User){
    request = request.clone({
      setHeaders: {
        Authorization: AuthToken
      }
    })
  }

    
    return next.handle(request);
  }
}
