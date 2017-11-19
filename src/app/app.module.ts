import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SummaryModalPage } from '../pages/summary-modal/summary-modal'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SectorProvider } from '../providers/sector/sector';

import {CustomerCardComponent} from '../components/customer-card/customer-card'
// import { HotTableModule } from 'angular-handsontable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SummaryModalPage,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // HotTableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SummaryModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SectorProvider
  ]
})
export class AppModule {}
