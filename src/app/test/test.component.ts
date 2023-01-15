import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  token:any
  httpHeaders:HttpHeaders
  room:any
  image :any
  description:any
  price:any
  title:any

  constructor(private reservationservice:ReservationService) { 
    this.token = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
     this.httpHeaders = new HttpHeaders()
    .set('Authorization', "Bearer "+this.token)
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
    ; 
  }

  ngOnInit(): void {
    
    
  }

}
