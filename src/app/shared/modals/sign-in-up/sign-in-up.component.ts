import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignInUpComponent implements OnInit {

  optSent = false;
  email: string = '';
  password: string = '';
  otp: string = '';
  id: string = '';
  name: string = '';

  constructor(private authService: AuthService, 
    private toastr: ToastrService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  signIn(){
    let userInfo = {email: this.email, password: this.password};
    this.authService.userSignin(userInfo).subscribe(res => {
      if(res.body.success){
        this.toastr.success('User Sign in');
        let userData = res.body.msg;
        this.localStorageService.setToken(userData.token);
        this.localStorageService.setUserInfo(userData);
      } else{
        this.toastr.error(res.body.msg);
      }
    })
  }

  sendOTP(){
    let userInfo = {
      email: this.email,
      password: this.password,
      name: this.name
    }
    
    this.authService.userSignUp(userInfo).subscribe(res => {
      if(res.body.success){
        this.toastr.success(res.body.msg);
        this.optSent = true;
        this.id = res.body.id;

      } else{
        console.log(res.body);
        this.toastr.error(res.body.msg);
      }
    });
  }

  singUp(){
    this.authService.verifyOtp({otp: this.otp, id: this.id, userType: "customer", email: this.email}).subscribe(res => {
      if(res.body.success){
        let userInfo;
        userInfo = {
          email: res.body.msg.email,
          id: res.body.msg.id,
          name: res.body.msg.name,
        }
        let jwt = res.body.token;
        console.log(userInfo, jwt);        
        this.localStorageService.setToken(jwt);
        this.localStorageService.setUserInfo(userInfo);        
        this.toastr.success('User signed Up');
      } else{
        this.toastr.error(res.body.msg);
      }
    })
  }

}
