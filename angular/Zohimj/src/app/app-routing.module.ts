import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HaushaltComponent } from './haushalt/haushalt.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AdjustMeasureComponent } from './adjust-measure/adjust-measure.component';
import { ReperaturComponent } from './reperatur/reperatur.component';
import { AltnachNeuComponent } from './altnach-neu/altnach-neu.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'haushalt', component: HaushaltComponent },
  { path: 'accessoires', component: AccessoiresComponent },
  { path: 'measure', component: AdjustMeasureComponent },
  { path: 'reperatur', component: ReperaturComponent },
  { path: 'altnachneu', component: AltnachNeuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
