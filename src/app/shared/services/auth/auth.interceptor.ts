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

  constructor() {}

  intercept(request, next) {
    if (request.url !== 'http://localhost:8080/auth/login')
    {
   request = request.clone({
  
     setHeaders: {
       Authorization: `Bearer ${localStorage.getItem('token')}`
     
    } 
   });
  }
   return next.handle(request);
 }
}
