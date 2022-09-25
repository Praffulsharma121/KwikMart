import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PayingModalComponent } from '../paying-modal/paying-modal.component';

@Component({
  selector: 'app-billing-modal',
  templateUrl: './billing-modal.component.html',
  styleUrls: ['./billing-modal.component.css']
})
export class BillingModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPayMethods(){
    const dialogConfg = new MatDialogConfig();
    dialogConfg.disableClose = true;
    dialogConfg.autoFocus = true;
    let dialogRef = this.dialog.open(PayingModalComponent, dialogConfg);
  }

}
