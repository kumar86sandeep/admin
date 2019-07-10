import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { AdminAuthGuardService } from './core/guards/admin-auth-guard.service'

const routes: Routes = [
  {
  path: 'admin',
  data: {
      title: 'Get Started',
  },
  canActivate: [AdminAuthGuardService],
  children: [
    {
      path: '',
      component: HomeComponent,
      data: {
        customLayout: false
      }
    }, 
    {
      path: 'cars',
      loadChildren: './home/cars/cars.module#CarsModule',
      data: {
        customLayout: false
      }
    }, 
    ]
  },  
  {
    path: '',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
