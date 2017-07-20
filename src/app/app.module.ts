import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthService }   from './services/auth.service';
import { UserService }   from './services/user.service';
import { ApiService }   from './services/api.service';
import { WindowRef }     from './services/window.service';

// Components
import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { LoginComponent }       from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
// Games
import { SpaceBattleComponent }   from './games/space-battle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SpaceBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
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
