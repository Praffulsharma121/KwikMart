import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paying-modal',
  templateUrl: './paying-modal.component.html',
  styleUrls: ['./paying-modal.component.css']
})
export class PayingModalComponent implements OnInit {

  selectedValue = 'Cash on delivery';
  notSelected = true;
  byCard = false;
  byUPI = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(){
    this.notSelected = false;
    console.log(this.selectedValue); 
  }

  onChoose(type:any){
    if(type=='Card'){
      this.byCard = true;
    } else{
      this.byUPI = true;
    }
    console.log(this.byUPI);
    
  }

}
