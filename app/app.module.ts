import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ItemService } from './home/home.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent,
      HomeComponent
   ],
   providers: [
     ItemService
   ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
