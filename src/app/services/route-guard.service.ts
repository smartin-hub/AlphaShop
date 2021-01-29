import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { AuthappService } from './authapp.service';
import { AuthJWTService } from './AuthJWTService';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate  {

  token : string = '';
  ruoli : string[] = new Array();
  items : any;

  constructor(private BasicAuth: AuthJWTService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot)  {


    this.token = this.BasicAuth.getAuthToken();
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);

    this.items = decodedToken['role'];

    if(!Array.isArray(this.items)){
      this.ruoli.push(this.items);
    } else {
      this.ruoli = this.items;
    }

    if (!this.BasicAuth.isLogged()) {
      this.route.navigate(['login']);
      return false;
    } else {
      if(route.data.roles == null || route.data.roles.length == 0){
        return true;
      } else if(this.ruoli.some(r => route.data.roles.includes(r))){
        return true;
      } else {
        this.route.navigate(['forbidden']);
        return false;
      }
    }
  }
}
