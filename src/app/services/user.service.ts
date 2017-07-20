import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { ApiService }   from './api.service';

@Injectable()
export class UserService {

  private path: string = '/users';

  constructor(private api: ApiService){}

  getCredentials(authToken: string): Observable<any> {
    console.log('--')
    return this.api.post(this.path + '/get-credentials', { token: authToken });
  }

}
