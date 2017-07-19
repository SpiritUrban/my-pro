import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { LoginComponent }       from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'login',      component: LoginComponent } /*
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
