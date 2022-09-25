import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-operational-cities',
  templateUrl: './operational-cities.component.html',
  styleUrls: ['./operational-cities.component.css']
})
export class OperationalCitiesComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
