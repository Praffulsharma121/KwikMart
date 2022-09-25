import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BillingModalComponent } from '../shared/modals/billing-modal/billing-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onProceed(){
    const dialogConfg = new MatDialogConfig();
    dialogConfg.disableClose = true;
    dialogConfg.autoFocus = true;
    let dialogRef = this.dialog.open(BillingModalComponent, dialogConfg);
  }

}
