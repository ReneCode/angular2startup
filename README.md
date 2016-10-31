# angular2startup
startup project for a Angular2 app

based on:  https://angular.io/docs/ts/latest/quickstart.html

Start: 
- npm install
- npm run postinstall
- npm start

happy coding

----

### Component 

	import { Component } from '@angular/core';
	@Component({
		selector: 'app-home',
		templateUrl: 'app/home/home.component.html'
	})
	export class HomeComponent {...}

eintragen in module.ts

	  declarations: [ 
	      HomeComponent,


### Service:
	import { Injectable } from '@angular/core';
	@Injectable()
	export class ItemService {...}

Eintragen in module.ts

	providers: [
		ItemService


### Routing:
hier wird das routing eingefügt:

	<router-outlet></router-outlet>

in module.ts definieren:

	import { RouterModule } from '@angular/router';

	imports: [
		RouterModule.forRoot([
			{ path: "", component: HomeComponent },
			{ path: "about", component: AboutComponent } 
		]) 
	]

so wird es angesprochen:

	<a routerLink="about">home</a> |
