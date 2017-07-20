import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { WindowRef }     from './window.service';


@Injectable()
export class AuthService {

  private authHook = new Subject();

  constructor(
    private winRef: WindowRef
  ) {
    console.log('Native window obj', winRef.nativeWindow);
    winRef.nativeWindow.authHook = this.authHook;
  }

  setAuthHook() {
    this.authHook.subscribe(authToken => {
      console.log('authToken !!! ', authToken)
    })

  }

}
