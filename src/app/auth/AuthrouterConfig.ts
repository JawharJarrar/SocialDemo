import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [

  { path: 'auth', 
  component: AuthComponent ,
  children: [

    { path: 'login', 
    component: LoginComponent 
  },

  { path: 'register',
    component: RegisterComponent
  }

]}
 
];
export default appRoutes;