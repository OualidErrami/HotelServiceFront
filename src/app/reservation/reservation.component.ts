import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../service/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  centered = true;
  disabled = false;
  unbounded = false;

  radius: number=0;
  color: string='';

  token:any
  httpHeaders:HttpHeaders
  room:any
  image :any
  description:String=""
  price:String=""
  title:String=""
  email=JSON.parse(localStorage.getItem('currentUser') || '{}')['email']
  id:any
  
  
  constructor(
    private reservationservice:ReservationService,
    private formbuilder:FormBuilder,
    private sanitizer:DomSanitizer,
    private route:ActivatedRoute
    ,private router:Router

    ) {
      this.id=route.snapshot.params["roomid"]
    this.token = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
     this.httpHeaders = new HttpHeaders()
    .set('Authorization', "Bearer "+this.token)
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
    ; 
   }

  ngOnInit(): void {
   // var today = new Date().toISOString().split('T')[0];
   // document.getElementsByName("dateDeDebut")[0].setAttribute('min', today);
    this.reservationservice.getrooms(this.id,this.httpHeaders)
    .subscribe(data=>{
      this.room=data
      this.image=this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      + this.room.photo.image.data)
      this.description=this.room.description
      this.price=this.room.price
      this.title=this.room.title
      console.log(this.room)
    })



  }

gotoconfiramtion(){
  this.router.navigateByUrl('/confiramtion/'+this.id)
}

    
        

}
