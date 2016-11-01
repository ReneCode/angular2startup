import { Component } from '@angular/core';
import { ItemService } from './home.service';

@Component({
	selector: 'app-home',
	templateUrl: 'app/home/home.component.html'

})
export class HomeComponent  {

	pageTitle = 'EPL-Home';
	searchText = "";

	constructor(private m_itemService: ItemService) {

	}

	getItems() {
		return this.m_itemService.Items();
	}

	onClick(value) {
	//	console.log(this.searchText);
		this.m_itemService.Items().push(value);
	}

}