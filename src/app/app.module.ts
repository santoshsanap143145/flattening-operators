import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergeMapUsersComponent } from './shared/components/merge-map-users/merge-map-users.component';
import { MergeMapProductsComponent } from './shared/components/merge-map-products/merge-map-products.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SwithMapTvShowsComponent } from './shared/components/swith-map-tv-shows/swith-map-tv-shows.component';
import { SwithMapTmdbComponent } from './shared/components/swith-map-tmdb/swith-map-tmdb.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MergeMapUsersComponent,
    MergeMapProductsComponent,
    NavbarComponent,
    SwithMapTvShowsComponent,
    SwithMapTmdbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
