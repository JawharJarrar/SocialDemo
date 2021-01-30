import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request, next) {
   
   request = request.clone({
     setHeaders: {
       Authorization: `Bearer ${this.auth.getToken()}`
     }
   });

   return next.handle(request);
 }
}
