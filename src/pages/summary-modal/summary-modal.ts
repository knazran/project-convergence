import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';
/**
 * Generated class for the SummaryModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary-modal',
  templateUrl: 'summary-modal.html',
})
export class SummaryModalPage {
	@ViewChild('vizCanvas') vizCanvas;

	segment:any ='amount';
	amount_rm = [10537, 9280];
	freq_arr = [5, 4];

	vizChart : any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.drawChart(this.amount_rm)
  }


  drawChart(data){
    this.vizChart = new Chart(this.vizCanvas.nativeElement, {
    	type: 'bar',
    	data: {
    	    labels: ['Libya', 'Lebanon'],
    	    datasets: [{
    	        data: data,
    	        backgroundColor: [
    	            'rgba(255, 99, 132, 0.2)',
    	            'rgba(54, 162, 235, 0.2)',
    	            'rgba(255, 206, 86, 0.2)',
    	            'rgba(75, 192, 192, 0.2)',
    	            'rgba(153, 102, 255, 0.2)',
    	            'rgba(255, 159, 64, 0.2)'
    	        ],
    	        borderColor: [
    	            'rgba(255,99,132,1)',
    	            'rgba(54, 162, 235, 1)',
    	            'rgba(255, 206, 86, 1)',
    	            'rgba(75, 192, 192, 1)',
    	            'rgba(153, 102, 255, 1)',
    	            'rgba(255, 159, 64, 1)'
    	        ],
    	        borderWidth: 1
    	    }]
    	},
    	options: {
    	    legend: {
    	      display: false
    	    },
    	    scales: {
    	        yAxes: [{
    	            ticks: {
    	                beginAtZero:true
    	            }
    	        }]
    	    },
    	    events: false,
    	    tooltips: {
    	        enabled: false
    	    }
    	  }
    	})
  }


  segmentChanged(event:any){
    console.log("Change")
    if (this.segment == 'amount'){
      // this.hideViz = false;
      console.log('amount', this.amount_rm)
      this.drawChart(this.amount_rm);
    }else{
      this.drawChart(this.freq_arr);
    }
  }
}
