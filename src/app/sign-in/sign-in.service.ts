import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './sign-in.component';
import {UtilService} from '../shared/util/util.service';

@Injectable()
export class SignInService {

  constructor(
    private http: HttpClient,
    private util: UtilService
  ) { }

  signIn(user: User): Observable<boolean>  {
    return this.http.post<boolean>('user/sign-in', user)
  }

  login(user: {userName: string, password: string}): Observable<string>  {
    return this.http.post<string>('user/login', user)
  }

  validateUser(name: string): Observable<boolean> {
    return this.http.get<boolean>('user/validate-user', {params: this.util.buildHttpParams({userName: name})});
  }
}
