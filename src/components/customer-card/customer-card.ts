import { Component, Input} from '@angular/core';

/**
 * Generated class for the CustomerCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customer-card',
  templateUrl: 'customer-card.html'
})
export class CustomerCardComponent {

	@Input() cus_name: string | "";
  @Input() cus_dob: string | "";
  @Input() cus_addr: string | "";
  @Input() cus_mobile: string | "";
  @Input() cus_nationality: string | "";
  @Input() cus_occupation: string | "";
  @Input() cus_spouse: string | "";


  constructor() {
  }

  ngOnInit(){
    // if(this.res_name == null){
    //   this.res_name = "DUMMY"
    // }
    // if(this.res_description == null){
    //   this.res_description = "No Description exists"
    // }
  }

}
