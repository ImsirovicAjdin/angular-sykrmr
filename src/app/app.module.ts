import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app-component/app.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { JumbotronComponent } from './jumbotron-component/jumbotron.component';
import { CarsComponent } from './cards-component/cards.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, CarsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
