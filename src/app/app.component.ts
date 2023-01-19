import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  // database json start
  airlinename: any
  departureTime: any
  departureAirportCode: any
  departureDateTime: any
  duration: any
  stopoverAirportCodes: any
  arrivalDateTime: any
  arrivalAirportCode: any
  totalAmount: any
  originalAmount: any
  stopoverCode: any
  // database json end
  users: any = [];
  // use:any =[];
  stopoversCount: any
  constructor(private userData: UsersDataService, private route: ActivatedRoute, private router: Router) {
    userData.users().subscribe((data) => {
      console.log("data", data)
      // console.log("data", JSON.stringify(data))
      this.users = data

      return this.users.sort((b: any, a: any) => {
        return <any>new Date(b.originalAmount) - <any>new Date(a.originalAmount);
      });

      
    });

    
    // console.log(this.users)
  };
  // toggle button 
  stopers = true
  stopeg() {
    if (this.stopoverCode = 'ONE_STOP') {
      // this.airlinename ,this.departureTime ,this.departureAirportCode, this.departureDateTime ,this.duration, this.stopoverAirportCodes ,this.arrivalDateTime , this.departureTime, this.arrivalAirportCode = this.totalAmount ,this.originalAmount;
      // console.log(this.airlinename)
      console.log("show")
    }
    else (this.stopoverCode = 'DIRECT'); {
      this.stopers = !this.stopers
    }

  }
  stopers1 = true

  stopeg1() {
    if (this.stopoverCode = 'DIRECT') {
      // this.airlinename = this.departureTime ,this.departureAirportCode = this.departureDateTime ,this.duration  ,this.arrivalDateTime = this.departureTime, this.arrivalAirportCode = this.totalAmount ,this.originalAmount;

    }
    else (this.stopoverCode = 'ONE_STOP'); {
      this.stopers1 = !this.stopers1
      console.log("hide")
    }
  }

  allData = true
  all() {
    this.allData = !this.allData
  }
  display1 = true
  toogle1() {
    this.display1 = !this.display1
  }
  // toggle button end
}
