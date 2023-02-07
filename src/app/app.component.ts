
import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
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
  filterBy: any;
  data: any;


  check1: boolean = false;
  check2: boolean = false;
  check3: boolean = false;
  check4: boolean = false;
  check5: boolean = false;
  check6: boolean = false;
  check7: boolean = false;
  check8: boolean = false;
  check9: boolean = false;


  filterFligts: any = [];


  constructor(
    private userData: UsersDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getFlightData();
    // this.getFlightData1();
  }

  getFlightData() {
    this.userData.users().subscribe((data) => {

      // this.users = this.sortdata(data);
      this.users = this.sortdata(data);
      this.filterFligts = this.users;
    });
  }


  // getFlightData1() {

  // let  dataT
  // dataT = [
  //   {name: 'naksh', id:1, city: 'asr'},
  //   {name: 'naman', id:2, city: 'xcl'},
  //   {name: 'naksh', id:3, city: 'asr'},
  //   {name: 'naman', id:4 ,city: 'xcl'},
  //   {name: 'deep', id:5, city: 'asr'},
  //   {name: 'rohan', id:6, city: 'xcl'},
  //   {name: 'naksh', id:7, city: 'asr'}
  // ] 
  // emit (1,2,3,4,5)


  // this.userData.users().subscribe((data) => {
  //   this.filterFligts = this.users;    
  //   var source = from(this.filterFligts);       

  //       source.pipe( 
  //         filter((member:any) =>  member.stopoverDurationMinutes == 0),
  //         filter((memberQ:any) => memberQ.departureTime < '14:15'),
  //         toArray()
  //         )
  //       .subscribe(res =>{
  //           console.log(res);
  //           this.filterFligts = res;
  //       })
  //   });
  // } 

  sortdata(data: any) {
    return data.sort((b: any, a: any) => {
      return <any>new Date(b.originalAmount) - <any>new Date(a.originalAmount);
    });
  }



  filterFligts1: any

  filterFlight(type: string) {
    if (type == 'DIRECT') {

      this.check1 = !this.check1;
    }
    if (type == 'ONE_STOP') {
      this.check2 = !this.check2;
    }

    if (type == '00:00' || type == '06:00') {
      this.check3 = !this.check3;

    }

    if (type == '06:01' || type == '11:59') {
      this.check4 = !this.check4;

    }

    if (type == '12:00' || type == '17:59') {
      this.check5 = !this.check5;

    }

    if (type == '18:00' || type == '23:59') {
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
      if (!this.check1 == true) {
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
        if (x.departureTime > '00:00' && x.departureTime < '06:00') {
          this.filterFligts.push(x);
        }

         if (this.check1 == true) {
          var source = from(this.filterFligts);
          source.pipe(
            filter((member: any) => member.stopoverDurationMinutes == 0),
            filter((memberQ: any) => memberQ.departureTime < '06:00'),
            toArray()
          )
            .subscribe(res => {
              console.log(res);
              this.filterFligts = res;
            })
        }
      }



      if (this.check4 == true) {
        if (x.departureTime > '06:01' && x.departureTime < '11:59') {
          this.filterFligts.push(x);
        }

        if (this.check1 == true) {
          var source = from(this.filterFligts);
          source.pipe(
            filter((member: any) => member.stopoverDurationMinutes == 0),
            filter((memberQ: any) => memberQ.departureTime < '11:59'),
            toArray()
          )
            .subscribe(res => {
              console.log(res);
              this.filterFligts = res;
            })

        }
      }

      if (this.check5 == true) {
        if (x.departureTime > '12:00' && x.departureTime < '17:59') {
          this.filterFligts.push(x);
        }

        if (this.check1 == true) {
          var source = from(this.filterFligts);
          source.pipe(
            filter((member: any) => member.stopoverDurationMinutes == 0),
            filter((memberQ: any) => memberQ.departureTime < '17:59'),
            toArray()
          )
            .subscribe(res => {
              console.log(res);
              this.filterFligts = res;
            })
        }
      }

      if (this.check6 == true) {
        if (x.departureTime > '18:00' && x.departureTime < '23:59') {
          this.filterFligts.push(x);
        }

        if (this.check1 == true) {
          var source = from(this.filterFligts);
          source.pipe(
            filter((member: any) => member.stopoverDurationMinutes == 0),
            filter((memberQ: any) => memberQ.departureTime < '23:59'),
            toArray()
          )
            .subscribe(res => {
              console.log(res);
              this.filterFligts = res;
            })
        }
      }

      if (this.check7 == true) {
        if (x.airlinename == 'Vistara') {
          this.filterFligts.push(x);
        }
      }


      if (this.check8 == true) {
        if (x.airlinename == 'IndiGo') {
          this.filterFligts.push(x);
        }
      }

      if (this.check9 == true) {
        if (x.airlinename == 'Go First') {
          this.filterFligts.push(x);
        }
      }

    });
    console.log(this.filterFligts);
  }

}