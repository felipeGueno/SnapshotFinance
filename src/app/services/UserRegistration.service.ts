import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistration } from '../components/models/UserRegistration';
import { environmentRegistration } from 'src/environments/environments';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient , private snack: MatSnackBar){}

  baseUrl = environmentRegistration.baseUrl; 
  

  saveUser(userRegistration: UserRegistration): Observable<UserRegistration>{
    return this.http.post<UserRegistration>(this.baseUrl, userRegistration);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, `OK`, {
      horizontalPosition: `end`,
      verticalPosition: `top`, 
      duration:4000
    })
   }
}
