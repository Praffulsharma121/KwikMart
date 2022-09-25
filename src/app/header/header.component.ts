import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LocalStorageService } from '../services/local-storage.service';
import { OperationalCitiesComponent } from '../shared/modals/operational-cities/operational-cities.component';
import { SignInUpComponent } from '../shared/modals/sign-in-up/sign-in-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signIn = false;

  constructor(private dialog: MatDialog, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    let jwt = this.localStorageService.getToken();
    if(jwt){
      this.signIn = true;
    }
  }

  onProfile(){
    if(this.localStorageService.getToken()){
      this.signIn = true;
      this.ngOnInit();
    } else {
      const dialogConfg = new MatDialogConfig();
      dialogConfg.disableClose = true;
      dialogConfg.autoFocus = true;
      let dialogRef = this.dialog.open(SignInUpComponent, dialogConfg);
    }
  }

  selectOperationalCity(){
    const dialogConfg = new MatDialogConfig();
    dialogConfg.disableClose = true;
    dialogConfg.autoFocus = true;
    let dialogRef = this.dialog.open(OperationalCitiesComponent, dialogConfg);
  }

  logOut(){
    this.localStorageService.destroyToken();
    this.signIn = false;
  }

}
