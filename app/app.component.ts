import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
<div class="container">
  <h1>My first Angular 2 App</h1>
    <div>
      <a routerLink="">home</a> |
      <a routerLink="about">about</a>
    </div>
    <router-outlet></router-outlet>
</div>
  `
})
export class AppComponent { }
