import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import  appRoutes from './AuthrouterConfig';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthComponent } from './auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    RegisterComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    RouterModule
  ]
})
export class AuthModule { }
