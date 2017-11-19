import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SectorPage } from '../sector/sector'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  /**
   * Navigate to the detail page for this item.
   */
  openSectorPage() {
    this.navCtrl.push('SectorPage');
  }
}
