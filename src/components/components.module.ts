import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomerCardComponent } from './customer-card/customer-card';
@NgModule({
	declarations: [CustomerCardComponent],
	imports: [IonicModule],
	exports: [CustomerCardComponent]
})
export class ComponentsModule {}
