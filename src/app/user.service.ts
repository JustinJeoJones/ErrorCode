import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  usernameExists(username:string):Observable<boolean>{
    let result = Math.random();
    console.log(result)
    return of(result < 0.5);
  }
}

