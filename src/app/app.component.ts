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

  check1: boolean = true;
  check2: boolean = true;
  check3: boolean = true;
  check4: boolean = true;
   early = '06:00'
   afterEarly = '12:00'
  // check5: boolean = true;

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
    
    if (type == 'DIRECT') {
      this.check1 = !this.check1;
    }
    if (type == 'ONE_STOP') {
      this.check2 = !this.check2;
    }

    if (type < this.early) {
      this.check3 = !this.check3;
    }

    if (this.early < this.afterEarly) {
      this.check4 = !this.check4;
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
        if (x.departureTime < this.early ) {
          this.filterFligts.push(x);
        }
      }

      if (this.check4 == true) {
        if (x.departureTime == this.early < this.afterEarly ) {
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
