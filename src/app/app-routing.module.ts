import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [
  {path:'about',component:IntroductionComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'pricing',component:PricingTablesComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'clients',component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
