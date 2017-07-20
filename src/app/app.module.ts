import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { LoginComponent }       from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AuthService }   from './services/auth.service';
import { UserService }   from './services/user.service';
import { ApiService }   from './services/api.service';
import { WindowRef }     from './services/window.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UserService,
    ApiService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}
