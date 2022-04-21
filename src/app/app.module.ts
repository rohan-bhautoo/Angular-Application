import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleComponentComponent } from './single-component/single-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ComponentListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
