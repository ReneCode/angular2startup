import { Component } from '@angular/core';
import { ItemService } from './home.service';

@Component({
	selector: 'app-home',
	templateUrl: 'app/home/home.component.html'

})
export class HomeComponent  {

	pageTitle = 'EPL-Home';

	constructor(private m_itemService: ItemService) {

	}

	getItems() {
		return this.m_itemService.Items();
	}

	onClick(value) {
		this.m_itemService.Items().push(value);
		
	}
}