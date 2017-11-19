import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SectorProvider } from '../../providers/sector/sector';
import { Sector, Table } from '../../models/table';
import { TablePage } from '../table/table'

import { Chart } from 'chart.js';
/**
 * Generated class for the SectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sector',
  templateUrl: 'sector.html',
})
export class SectorPage {

  // @ViewChild('vizCanvas') vizCanvas;
	current_sector : Sector;
	tables : Table[];
	segment = 'tables';

  // vizChart : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public sector : SectorProvider) {
  	this.current_sector = this.sector.query(0);
    console.log(this.sector.query("desc"))
  	this.tables = this.current_sector.tables;
  }

  // Giant scary code to draw our savings bar chart
  // drawChart(){
  //   let ctx = this.vizCanvas.nativeElement;
  //   this.vizChart = new Chart(ctx, {
  //       type: 'line',
  //       data: {
  //           labels: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11'],
  //           datasets: [
  //               {
  //                   label: "Trend of Suspected Terrorism Financing",
  //                   fill: false,
  //                   lineTension: 0.1,
  //                   backgroundColor: "rgba(75,192,192,0.4)",
  //                   borderColor: "rgba(75,192,192,1)",
  //                   borderCapStyle: 'butt',
  //                   borderDash: [],
  //                   borderDashOffset: 0.0,
  //                   borderJoinStyle: 'miter',
  //                   pointBorderColor: "rgba(75,192,192,1)",
  //                   pointBackgroundColor: "#fff",
  //                   pointBorderWidth: 1,
  //                   pointHoverRadius: 5,
  //                   pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //                   pointHoverBorderColor: "rgba(220,220,220,1)",
  //                   pointHoverBorderWidth: 2,
  //                   pointRadius: 1,
  //                   pointHitRadius: 10,
  //                   data: ['1', '6', '8', '0', '2', '4'],
  //                   spanGaps: false,
  //               }
  //           ]
  //       },
  //       options:{
  //         responsive: true,
  //         maintainAspectRatio: false
  //       }
  //     })
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectorPage');
    // this.drawChart();
  }

  openTablePage(idx: number) {
  	console.log(this.tables[idx])
  	let table_info = this.tables[idx]
    this.navCtrl.push('TablePage', {table_info: table_info});
  }

}
