import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { SummaryModalPage } from '../summary-modal/summary-modal'
import { Chart } from 'chart.js';

declare var google;
declare var heatmap;
/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('vizCanvas') vizCanvas;

  map: any;
  heatmap : any;
  vizChart : any

  segment = 'about';

  name = "Khai";
  dob = "4/11/1994";
  address = "Lanai Kijang";
  mobile_num = "014-7324982365";
  nationality = "Malaysia";
  occupation = "Chef";
  spouse = "Neelofa";

  avatar = '../../assets/img/my_beautiful_pic.png'
  network = '../../assets/img/path (1).png'
  face = '../../assets/img/Facial Comparison Prototype.PNG'
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
    this.loadMap();
    this.drawChart();

    // Load twitter widget
    !function(d,s,id){
                var js: any,
                    fjs=d.getElementsByTagName(s)[0],
                    p='https';
                if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src=p+"://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js,fjs);
                }
            }
            (document,"script","twitter-wjs");
  }

  openSummaryModal(){
    console.log("RUN")
    let summaryModal = this.modalCtrl.create(SummaryModalPage);
    summaryModal.present();
  }

  loadMap(){
      let heatmapData = [
        new google.maps.LatLng(2.762698, 101.721754),
        new google.maps.LatLng(2.762698, 101.721754),
        new google.maps.LatLng(2.762698, 101.721754),
        new google.maps.LatLng(2.762698, 101.721754),
        new google.maps.LatLng(2.762698, 101.721754),
        new google.maps.LatLng(3.159315, 101.696503),
        new google.maps.LatLng(3.133886, 101.710080),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(3.326708, 101.495916),
        new google.maps.LatLng(5.617338, 100.465309),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.411546, 100.134104),
        new google.maps.LatLng(6.043558, 102.258377),
        new google.maps.LatLng(6.043558, 102.258377),
        new google.maps.LatLng(6.043558, 102.258377),
        new google.maps.LatLng(6.043558, 102.258377),
        new google.maps.LatLng(6.043558, 102.258377),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(2.532960, 101.825838),
        new google.maps.LatLng(3.111112, 101.583521),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(4.945767, 103.285056),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
        new google.maps.LatLng(1.523178, 103.710769),
      ];

      let kl = new google.maps.LatLng(3.13871,101.68210);

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: kl,
        zoom: 6,
        mapTypeId: 'satellite'
      });

      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
      });
      this.heatmap.setMap(this.map);
    }
  // Giant scary code to draw our savings bar chart
  drawChart(){
    this.vizChart = new Chart(this.vizCanvas.nativeElement, {
        type: 'line',
        data: {
            labels: ['1/11', '2/11', '3/11', '4/11', '5/11', '6/11'],
            datasets: [
                {
                    // label: "Transaction History and Amount",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: ['1200', '1600', '1000', '2800', '1800', '1900'],
                    spanGaps: false,
                }
            ]
        },
        options:{
          responsive: true,
          legend: {
            display: false
          },
          scales: {
              yAxes: [{
                  ticks: {
                      // min: this.highest_day_savings * 1.5,
                      beginAtZero:true
                  }
              }]
          },
          // maintainAspectRatio: true
        }
      })
  }
}
