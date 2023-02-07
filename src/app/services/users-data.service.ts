import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  
  // url = "http://localhost/text/array7.php"
  url = "http://localhost/text/array.php"
  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url)
  }
  use(){
    return this.http.get(this.url)
  }


  
}
