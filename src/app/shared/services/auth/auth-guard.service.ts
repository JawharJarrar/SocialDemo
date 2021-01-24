import { Injectable } from '@angular/core';

import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService }         from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate( ) {
    if  ( this.authService.IsLoggedin( ) ) {
    return true;
     }
    this.router.navigate ( ['auth/login'] ) ;
    return false;
  }

  canActivateChild( ) {
    if  ( this.authService.IsLoggedin( ) ) {
    return true;
     }
    this.router.navigate ( ['auth/login'] ) ;
    return false;
  }
}