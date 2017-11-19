import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { Sector, SectorClass, Table, Series, Data, Metadata, Description } from '../../models/table';
/*
  Generated class for the SectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class SectorProvider {

	sectors : Sector[] = [];

	defaultData : Data = {
		labels : ['2010', '2011', '2012', '2013'],
		data_point : [500, 2111, 1900, 2440]
	}

	defaultTableMetadata : Metadata = {
		created : Date.now(),
		last_updated : Date.now(),
		format_available : ["JSON", 'XML', "Excel"],
		title : "1.1 Reserve Money",
		title_component : "Something about money",
		key			: "12371409",
		desc		: "Money and Banks lah",
		tags		: ["Money", "Reserve", "Important"],
		notes		: ["Updated tau"],
		definitions : ["MOney is good"]
	}

	defaultSeriesMetadata : Metadata = {
		created : Date.now(),
		last_updated : Date.now(),
		format_available : ["JSON"],
		title : "Total Reserve Money",
		title_component : "Money we hoarde just in case",
		key			: "12371409",
		desc		: "The money the bank keeps",
		tags		: ["Money", "Reserve", "Important"],
		notes		: ["Updated tau"],
		definitions : ["MOney is good"]
	}

	defaultSeries : Series = {
		metadata : this.defaultSeriesMetadata,
		data : this.defaultData,
		unit : "Ringgit in millions",
		x_label : "Year",
		y_label : "RM in millions"
	}

	defaultTable : Table = {
		metadata : this.defaultTableMetadata,
		series : [this.defaultSeries]
	}

	defaultSector : Sector = {
		title : "Monetary and Banking",
		desc : "Something something money",
		tables : [this.defaultTable]
	}

	constructor() {
		this.sectors.push(this.defaultSector);
	}

	query(params?: any) {
		return this.sectors[params]
    }
}
