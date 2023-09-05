import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { ReperaturComponent } from './reperatur/reperatur.component';
import { HaushaltComponent } from './haushalt/haushalt.component';
import { AdjustMeasureComponent } from './adjust-measure/adjust-measure.component';
import { AltnachNeuComponent } from './altnach-neu/altnach-neu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PagesComponent,
    GalleryComponent,
    ContactComponent,
    AccessoiresComponent,
    ReperaturComponent,
    HaushaltComponent,
    AdjustMeasureComponent,
    AltnachNeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
