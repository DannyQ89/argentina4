import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { LogoApComponent } from './Components/logo-ap/logo-ap.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/logo-ap/home/home.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    LogoApComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
