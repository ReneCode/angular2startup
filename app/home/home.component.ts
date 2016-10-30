import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
		<p>{{pageTitle}}</p>
		<ul>
		<li *ngFor="let item of items">{{item}}</li>
		</ul>
		`

})
export class HomeComponent  {
	pageTitle = 'EPL-Home';

	items = [ 'schaf', 'tier', 'haus', 'garten'];
}