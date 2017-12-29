import { Injectable } from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginDataService} from '../data-cache/login-data.service';


@Injectable()
export class CanLoadService implements CanLoad{
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return !!this.lg.getLoginFlag();
  }

  constructor(private lg: LoginDataService) { }

}
