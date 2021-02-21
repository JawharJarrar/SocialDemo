import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup ;

  constructor(private authService: AuthService, 
              private formBuilder: FormBuilder,
              private router: Router
              ) { }

  ngOnInit() {
    console.log("got here");
    this.loginForm = this.formBuilder.group({
      'username': [ '', [
        Validators.required,
      ]],
      'password': [ '', [
        Validators.required,
      ]],
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (data: any): void => {
        if (data.token ) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.user.userName);
          localStorage.setItem('id', data.user.userId);       
          this.router.navigate(['/dashboard']);
      }},
      (error: any) => {
        console.log(error);
      },
    );
  }
}
