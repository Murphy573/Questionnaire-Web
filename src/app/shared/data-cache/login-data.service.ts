import { Injectable } from '@angular/core';

@Injectable()
export class LoginDataService {

  constructor() { }

  setLoginFlag() {
    window.sessionStorage.setItem('loginFlag', 'true');
  }

  removeLoginFlag() {
    window.sessionStorage.removeItem('loginFlag');
  }

  getLoginFlag(): string {
    return window.sessionStorage.getItem('loginFlag');
  }
}
