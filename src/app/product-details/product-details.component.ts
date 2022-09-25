import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  myImage = "assets/images/dettolSanitizer.png";
  qunatity = 1;
  id : any;
  orignalPrice = 120;
  price = 120;
  productDetails: any;
  constructor(private route: ActivatedRoute, 
    private productService: ProductsService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductDetails();
  }

  getProductDetails(){
    this.productService.getProductDetails({id: this.id}).subscribe(res => {
      if(res.body.success){
        this.productDetails = res.body.msg[0];
        console.log(this.productDetails);
        
      } else{
        this.toastr.error(res.body.msg);
      }
      
    })
  }

  onQunatity(type: any){
    if(type=='add'){
      this.qunatity++;
      this.price = this.price + this.orignalPrice;
    } else{
      if(this.qunatity!=1){
        this.qunatity--;
        this.price = this.price - this.orignalPrice;
      }
    }
  }

}
