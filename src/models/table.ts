/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */

export interface Sector {
	title 		: string;
	desc?		: string;
	tables 		: Array<Table>;
	summary?	: Array<any>;
}	

export interface Table {
	metadata 	: Metadata;
	series		: Array<Series>;
}

export interface Series {
	metadata 	: Metadata;
	data 		: Data;
	unit		: string;
	x_label 	: string;
	y_label 	: string;
}

export interface Data {
	labels 		: Array<any>;
	data_point	: Array<number>;
}

export interface Metadata {
	created 			: number;
	last_updated 		: number;
	format_available	: Array<any>;
	title 				: string;
	title_component		: string;
	key					: string;
	desc				: string;
	tags?				: Array<string>
	notes?				: Array<any>;
	definitions? 		: Array<any>;
}

export interface Description {
	key			: string;
	desc		: string;
	tags		: Array<string>
	notes		: Array<any>;
	definitions : Array<any>;
}

export class SectorClass {
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }
}
