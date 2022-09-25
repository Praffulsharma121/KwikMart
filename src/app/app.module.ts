import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SignInUpComponent } from './shared/modals/sign-in-up/sign-in-up.component';
import { OperationalCitiesComponent } from './shared/modals/operational-cities/operational-cities.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { BillingModalComponent } from './shared/modals/billing-modal/billing-modal.component';
import { PayingModalComponent } from './shared/modals/paying-modal/paying-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CartComponent,
    ProductDetailsComponent,
    SearchResultsComponent,
    SignInUpComponent,
    OperationalCitiesComponent,
    BillingModalComponent,
    PayingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    NgxImageZoomModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
