import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable }      from "rxjs/Rx";
import { Chart } from 'chart.js';

/**
 * Generated class for the VisualizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualization',
  templateUrl: 'visualization.html',
})
export class VisualizationPage {

  @ViewChild('vizCanvas') vizCanvas;
  
  public refresher: any; //refresher object for pull to refresh
  public data : any //data object. IMPROVEMENT: Should enforce strong typed object

  vizChart: any; //Chart object

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
    // Initialize the page
    // Improvement: Move to ionViewLoaded
    // this.getTransactions().then(() =>{
    //   this.calculateStats();
    //   this.drawSavingsGraph(this.weekly_savings_arr);
    // });
  }


}
