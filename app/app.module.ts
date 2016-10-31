import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ItemRowComponent } from './item-row/item-row.component'
import { ItemService } from './home/home.service'
import { AboutComponent } from './about/about.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent } 
    ]) 
  ],
  declarations: [ 
      AppComponent,
      HomeComponent,
      ItemRowComponent,
      AboutComponent
   ],
   providers: [
     ItemService
   ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
