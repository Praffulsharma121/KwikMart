import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getAllProducts(){
    let url = '/customer/get-all-products';
    return new Observable<any>((obs: { next: (arg0: any) => void; }) => {
      this.apiService.get(url).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getProductDetails(id: any){
    let url = '/customer/get-product-details';
    return new Observable<any>((obs: { next: (arg0: any) => void; }) => {
      this.apiService.post(url, id).subscribe(res => {
        obs.next(res);
      });
    });
  }
}
