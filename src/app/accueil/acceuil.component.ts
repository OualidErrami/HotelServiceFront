import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { ImagesserviceService } from '../service/imagesservice.service';
import { ReservationService } from '../service/reservation.service';
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
  description:any
  rooms:any
  price:any
  title:any

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number=0;
  color: string="";
  

  constructor(
    private _sanitizer:DomSanitizer
    ,private route:Router
    ,private userService:UserService
    ,private imageService:ImagesserviceService
    ,private reservationservice:ReservationService
    ) {
   
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
    })
    this.imageService.getimage(httpHeaders)
    .subscribe(data=>{
      this.char=data.image.data
      this.image=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      + this.char)
          
    },err=>{console.log(err)})


    this.reservationservice.getallrooms(httpHeaders)
    .subscribe(data=>{
      this.rooms=data
     console.log(data.length)
     
    })
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigate(['SignIn'])
  }
  gotoReservation(id:any){
    this.route.navigateByUrl('/reservation/'+id)
  }

}
