import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummaryModalPage } from './summary-modal';

@NgModule({
  declarations: [
    SummaryModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SummaryModalPage),
  ],
})
export class SummaryModalPageModule {}
