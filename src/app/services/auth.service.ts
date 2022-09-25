import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  userSignUp(userData: any){
    let url = '/customer/signup';
    return new Observable<any>((obs: { next: (arg0: any) => void; }) => {
      this.apiService.post(url, userData).subscribe(res => {
        obs.next(res);
      });
    });
  }

  verifyOtp(otp: any){
    let url = '/customer/otpVerify';
    return new Observable<any>((obs: { next: (arg0: any) => void; }) => {
      this.apiService.post(url, otp).subscribe(res => {
        obs.next(res);
      });
    });
  }

  userSignin(userData: any){
    let url = '/customer/signin';
    return new Observable<any>((obs: { next: (arg0: any) => void; }) => {
      this.apiService.post(url, userData).subscribe(res => {
        obs.next(res);
      });
    });
  }

}
