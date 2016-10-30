import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'app/home/home.component.html'

})
export class HomeComponent  {
	pageTitle = 'EPL-Home';

	items = [ 'schaf', 'tier', 'haus', 'garten'];

	onClick(value) {
		this.items.push(value);
	}
}