import { Injectable } from '@angular/core';


@Injectable()
export class ItemService {


	items = [ 'schaf', 'tier', 'haus', 'garten'];

	Items() {
		return this.items;
	}
}

