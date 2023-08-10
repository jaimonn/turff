import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {
    path:'',redirectTo:'products',pathMatch:'full'
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'location',component:LocationComponent
  },
  {
    path:'tournament',component:TournamentsComponent
  },

  {
    path:'**',component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
