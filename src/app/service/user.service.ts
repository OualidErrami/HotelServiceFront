import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public host:String="http://localhost:8001"
  loggedIn=false
  constructor(private http:HttpClient) { }

  public adduser(form:any){
    return this.http.post(this.host+"/hotel/SignUp",form)
  }
  public getuser(header:HttpHeaders){
    return this.http.get(this.host+"/hotel/account",{headers:header})
  }
  public SignIn(form:FormGroup){
   return this.http.post<any>(this.host+"/hotel/SignIn",form).pipe(map((user) => {
    if (user && user.token) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn = true;
    }
    return user;
   }))
  }
  public isloggedin(){
    return !!JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
  }

  public getuserbytoken(token:any,header:HttpHeaders){
    return this.http.post(this.host+'/hotel/userbytoken',token,{headers:header})
  }
}
