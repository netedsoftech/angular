import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  
  users:any =[];
  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>{
    console.log("data", data)
    // console.log("data", JSON.stringify(data))

    this.users=data
    });

    
    // console.log(this.users)
  }

  
  // toggle button 
  // display=true
  // toogle(){
  //  this.display=!this.display
  // }

  // display1=true
  // toogle1(){
  //  this.display1=!this.display1
  // }

  // toggle button  end


  // todo list  start

  // list:any[]=[];

  // addTask(item:string){
  //   this.list.push({id:this.list.length,name:item});
  //   console.log(this.list)
  // }

  // removeTask(id:number){
  //   console.log(id)
  //   this.list=this.list.filter(item=>item.id!==id)
  // }

  // todo list  end

  // Pass Data child to component start
  // data=10;

  // updateChild(){
  //   this.data= Math.floor( Math.random()*9999)
  // }
  // Pass Data child to component end

  // memberData=[
  //   {name: 'Naman', email:'Naman@gmail.com'},
  //   {name: 'naksh', email:'nakshraj@gmail.com'},
  //   {name: 'rohan', email:'rohan@gmail.com'},
  //   {name: 'deep', email:'deep@gmail.com'}
  // ]
}
