import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapProductsComponent } from './shared/components/merge-map-products/merge-map-products.component';
import { MergeMapUsersComponent } from './shared/components/merge-map-users/merge-map-users.component';
import { SwithMapTvShowsComponent } from './shared/components/swith-map-tv-shows/swith-map-tv-shows.component';
import { SwithMapTmdbComponent } from './shared/components/swith-map-tmdb/swith-map-tmdb.component';

const routes: Routes = [
  {
    path: 'products',
    component: MergeMapProductsComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: MergeMapUsersComponent
  },
  {
    path: 'TVShows',
    component: SwithMapTvShowsComponent,
  },
  {
    path: 'movies',
    component: SwithMapTmdbComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
