import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  // nestedItems:any
  users: any = [];
  use: any = [];

  check1: boolean = false;
  check2: boolean = false;
  check3: boolean = false;
  check4: boolean = false;
  check5: boolean = false;
  check6: boolean = false;
  check7: boolean = false;
  check8: boolean = false;
  check9: boolean = false;
  // check9: boolean = true;

  filterFligts: any = [];

  constructor(
    private userData: UsersDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getFlightData();
  }

  getFlightData() {
    this.userData.users().subscribe((data) => {   
      this.users = this.sortdata(data);
      this.filterFligts = this.users;
    });
  }

  sortdata(data: any) {
    return data.sort((b: any, a: any) => {
      return <any>new Date(b.originalAmount) - <any>new Date(a.originalAmount);
    });
  }

 
  filterFlight(type: string) {
    if (type == 'DIRECT' ) {
      this.check1 = !this.check1;
    }
    if (type == 'ONE_STOP') {
      this.check2 = !this.check2;
    }

    if (type == '06:00') {
      this.check3 = !this.check3;
     
    }

    if (type == '11:59') {
      this.check4 = !this.check4;
     
    }

    if (type == '17:59') {
      this.check5 = !this.check5;
     
    }

    if (type == '18:00') {
      this.check6 = !this.check6;
     
    }

    if (type == 'Vistara') {
      this.check7 = !this.check7;
      
    }

    if (type == 'IndiGo') {
      this.check8 = !this.check8;
     
    }
    if (type == 'Go First') {
      this.check9 = !this.check9;
     
    }
  
   
    this.filterFligts = [];
    this.users.map((x: any) => {
      if (this.check1 == true) {
        if (x.stopoverCode == 'DIRECT') {
          this.filterFligts.push(x);
        }
       
      }
      if (this.check2 == true) {
        if (x.stopoverCode == 'ONE_STOP') {
          this.filterFligts.push(x);
        }
      }

      if (this.check3 == true) {
        if (x.departureTime < '06:00' ) {
          this.filterFligts.push(x);
        }
      }
      

      if (this.check4 == true) {
        if (x.departureTime < '11:59' ) {
          this.filterFligts.push(x);
        }
      }

      if (this.check5 == true) {
        if (x.departureTime  < '17:59') {
          this.filterFligts.push(x);
        }
      }

      if (this.check6 == true) {
        if (x.departureTime > '18:00' ) {
          this.filterFligts.push(x);
        }
      }

      if (this.check7 == true) {
        if (x.airlinename == 'Vistara' ) {
          this.filterFligts.push(x);
        }
      }


      if (this.check8 == true) {
        if (x.airlinename == 'IndiGo' ) {
          this.filterFligts.push(x);
        }
      }
      
      if (this.check9 == true) {
        if (x.airlinename == 'Go First' ) {
          this.filterFligts.push(x);
        }
      }
      

      
    });
    console.log(this.filterFligts);
  }

  // toggle button
  // display = true;
  // stopeg() {
  //   this.display = !this.display;
  // }

  // stopers = true;
  // stopeg1() {
  //   this.stopers = !this.stopers;
  // }

  // allData = true;
  // all() {
  //   this.allData = !this.allData;
  // }
  // display1 = true;
  // toogle1() {
  //   this.display1 = !this.display1;
  // }
  // toggle button end
}