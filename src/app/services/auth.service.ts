import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { WindowRef }     from './window.service';
import { UserService }   from './user.service';


@Injectable()
export class AuthService {

  private authHook: Subject<string> = new Subject();

  constructor(
    private winRef: WindowRef,
    private userService: UserService
  ) {
    console.log('Native window obj', winRef.nativeWindow);
    winRef.nativeWindow.authHook = this.authHook;
  }

  setAuthHook() {
    this.authHook
      .switchMap(authToken => this.userService.getCredentials(authToken))
      .subscribe(credentials => { console.log('credentials !!! ', credentials)});
  }

}


/*
      .subscribe(authToken => {
        console.log('authToken !!! ', authToken)
        this.userService.getCredentials(authToken)
          .subscribe( accessToken => {console.log('accessToken !!! ', accessToken)

        });
      });*/
