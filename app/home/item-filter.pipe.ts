import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
	name:'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {
	transform(list, filterBy) {
		if (!filterBy) {
			return list;
		} else {
			return list.filter( i => i.search(filterBy) >= 0);

		}

	}
}