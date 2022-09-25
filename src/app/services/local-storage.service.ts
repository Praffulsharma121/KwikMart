import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getToken(): string {
    return window.localStorage['customer_token'];
    // return this.cookieService.get('customer_token');
  }

  setToken(token: string) {
      window.localStorage['customer_token'] = token;
      // this.cookieService.set('customer_token', token);
  }

  destroyToken() {
      window.localStorage.removeItem('customer_token');
      // this.localStorageService.deleteSelectedCity();
      // this.cookieService.delete('customer_token');
  }

  setUserInfo(userInfo: any){
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  getUserInfo(){
    return window.localStorage.getItem('userInfo');
  }
}
