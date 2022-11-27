import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm:FormGroup;
  token:any
  httpHeaders:HttpHeaders
  email=JSON.parse(localStorage.getItem('currentUser') || '{}')['email']
  constructor(
    private reservationservice:ReservationService,
    private formbuilder:FormBuilder,
    ) {
    this.reservationForm=this.formbuilder.group(
      {
        dateDeDebut:['', Validators.required],
        dateDeFin:['', Validators.required],
        client:{email:this.email}
      }
    )
    this.token = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
     this.httpHeaders = new HttpHeaders()
    .set('Authorization', "Bearer "+this.token)
    .set('Access-Control-Allow-Origin', ' *')
    .set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
    ; 
   }

  ngOnInit(): void {
    console.log(this.email)
  }
  onsubmit(form:any){
    this.token = JSON.parse(localStorage.getItem('currentUser') || '{}')["token"];
    this.httpHeaders = new HttpHeaders()
   .set('Authorization', "Bearer "+this.token)
   .set('Access-Control-Allow-Origin', '*')
   .set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
   ; 
   console.log(this.reservationForm)
    this.reservationservice.makereservation(form,this.httpHeaders).
    subscribe(data=>{
      console.log(data)
      if(data.includes('Deja reserve'))
      {
        alert('rooms are full')
      }
    },err=>{
      console.log(err)
   
    })
  }
}
