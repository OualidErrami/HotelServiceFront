import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { ImagesserviceService } from '../service/imagesservice.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  token:string=""
  image:any
  char:String=""
  constructor(private _sanitizer:DomSanitizer,private route:Router,private userService:UserService,private imageService:ImagesserviceService) {
   
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
      console.log(data)
    })
    this.imageService.getimage(httpHeaders)
    .subscribe(data=>{
      console.log(data)
      this.char=data.image.data
      this.image=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      + this.char)
      console.log(this.image)
          
    },err=>{console.log(err)})
      
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigate(['SignIn'])
  }

}
