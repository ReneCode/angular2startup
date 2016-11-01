# angular2startup
startup project for a Angular2 app

based on:  https://angular.io/docs/ts/latest/quickstart.html

and: https://egghead.io/lessons/angular-2-passing-data-to-components-with-input?series=angular-2-fundamentals

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

add this in module.ts

	declarations: [ 
	    HomeComponent,


### Service:
	import { Injectable } from '@angular/core';
	@Injectable()
	export class ItemService {...}

inject in where you use it:

	constructor(private itemServer: ItemService)

add this in module.ts

	providers: [
		ItemService

or:

	constructor(@Injectable('mail') private mailService)

	providers: [ { provice:'mail', useClass:MailService} ]


### Routing:
place, where the routing will be shown:

	<router-outlet></router-outlet>

enter this in module.ts

	import { RouterModule } from '@angular/router';

	imports: [
	   RouterModule.forRoot([
		  { path: "", component: HomeComponent },
		  { path: "about", component: AboutComponent } 
	   ]) 
	]

link a a route:

	<a routerLink="about">home</a> |


### pipe

	<li *ngFor"let item of getItems() | itemFilter:filterText">

	import { PipeTransform, Pipe } from '@angular/core'

	@Pipe({
		name:'itemFilter'
	})
	export class ItemFilterPipe implements PipeTransform {
		transform(list, filterBy) {

in module.ts:

  declarations: [ 
      ItemFilterPipe
   ]



## using in html

	<li *ngFor="let msg of mail.messages">{{msg}}</li>

send values to a child component

	<app-item 
		*ngFor="let msg of mail.messages 
		[param]="msg > 
	</app-item>

	class ItemComponent {
		@Input() param;
	}
	{{param}}

	[]  input
	()  output
	<text type="text" [(ngModel)]=param