import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  jwttoken:string | undefined;
  constructor(private router: Router , private userService:UserService) {
    if (localStorage.getItem('currentUser') ) {
      this.jwttoken = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
   }
  }

  canActivate() {
    if (this.userService.isloggedin()){
      return true;
    }
    this.router.navigate(['/SignIn'])
    return false
  }

}









/* if(this.jwttoken == null) {
  this.jwttoken = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
}
let httpHeaders = new HttpHeaders()
.set('Authorization', "Bearer "+this.jwttoken)
.set('Access-Control-Allow-Origin', ' http://localhost:8001/hotel/account')
.set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
; 
this.userService.getuserbytoken(this.jwttoken,httpHeaders).subscribe(info=>{
  console.log(info)
  if(!info.hasOwnProperty('email')){
    this.router.navigate(['SignIn'])
  }
})
return true */