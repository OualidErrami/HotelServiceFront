import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  token:String=""
  firstname:String=""
  lastname:String=""


  constructor(private userService:UserService) {
    
   }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
    let httpHeaders = new HttpHeaders()
    .set('Authorization', "Bearer "+this.token)
    .set('Access-Control-Allow-Origin', ' *')
    .set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
    ; 
   
    this.userService.getuserbytoken(this.token,httpHeaders).
    subscribe(data=>{
      this.firstname=data.prenom 
      this.lastname=data.nom
      console.log(data)
    })
  }

}
