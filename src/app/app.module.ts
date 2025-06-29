import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergeMapUsersComponent } from './shared/components/merge-map-users/merge-map-users.component';
import { MergeMapProductsComponent } from './shared/components/merge-map-products/merge-map-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeMapUsersComponent,
    MergeMapProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
