import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import  { environment } from  'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authUrl = environment.springUrl + '/auth';

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.authUrl + '/login', user);
  }
  register(user: any) {
    return this.http.post(this.authUrl + '/register', user);
  }
}
