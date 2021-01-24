import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'auth', 
    component: AuthComponent 
  },

  { path: 'dashboard',
    component: DashboardComponent
  }
];
export default appRoutes;