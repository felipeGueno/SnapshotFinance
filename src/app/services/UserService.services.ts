import { HttpClient, HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistration } from '../components/models/UserRegistration';
import { environmentRegistration } from 'src/environments/environments';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private snack : MatSnackBar, private http : HttpClient){}
  
  
  
  

  baseUrl = environmentRegistration.baseUrl; 
  

  saveUser(userRegistration: UserRegistration){
    return this.http.post(this.baseUrl, userRegistration, {responseType: 'text'});
  }

   message(msg: any): void {
    
    this.snack.open(`${msg}`, `OK`, {
      horizontalPosition: `center`,
      verticalPosition: `bottom`, 
      duration:4000
    })

    
   } 
}
