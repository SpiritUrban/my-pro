import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserService {

  getCredentials(authToken: string){
    //return this.api.post(this.path + '/get-credentials');
  }

}
