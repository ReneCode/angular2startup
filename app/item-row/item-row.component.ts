import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-item-row',
	template: `
		<li><button>{{item}}</button></li>
	`

})
export class ItemRowComponent {
	@Input() item;
}