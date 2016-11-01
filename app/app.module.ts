import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ItemRowComponent } from './item-row/item-row.component'
import { ItemService } from './home/home.service'
import { AboutComponent } from './about/about.component'
import { ItemFilterPipe } from './home/item-filter.pipe'

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent } 
    ]) 
  ],
  declarations: [ 
      AppComponent,
      HomeComponent,
      ItemRowComponent,
      AboutComponent,
      ItemFilterPipe
   ],
   providers: [
     ItemService
   ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
