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
      })
    })
    // console.log(this.users)
  };
  // toggle button 
  stopers = true
  oneStop:any
  direct:any
  stopers1 = false
  
  stopeg() {
    if (this.users.stopoverCode = 'ONE_STOP') {
     this.oneStop =  this.users.airlinename ,this.users.departureTime ,this.users.departureAirportCode, this.users.departureDateTime ,this.users.duration, this.users.stopoverAirportCodes ,this.users.arrivalDateTime , this.users.departureTime, this.users.arrivalAirportCode , this.users.totalAmount ,this.users.originalAmount; 
      console.log(this.users.oneStop)
    }
    else (this.users = 'DIRECT'); {
      this.stopers = !this.stopers
      console.log(this.users.stopoverCode)
    }

  }
  stopeg1() {
    if (this.users.stopoverCode = 'DIRECT') {
      this.oneStop =  this.users.airlinename ,this.users.departureTime ,this.users.departureAirportCode, this.users.departureDateTime ,this.users.duration, this.users.stopoverAirportCodes ,this.users.arrivalDateTime , this.users.departureTime, this.users.arrivalAirportCode , this.users.totalAmount ,this.users.originalAmount;
      console.log(this.users.oneStop)
    } 
    else (this.users.stopoverCode = 'ONE_STOP'); {
      this.stopers1 = !this.stopers1
      console.log(this.users.stopoverCode)
    }
  }
  // toggle button end
}
