import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public host:String="http://localhost:8001/service"
  constructor(private http:HttpClient) { }
  
  public makereservation(form:FormGroup,headers:HttpHeaders){
    return this.http.post(this.host+"/MakeReservation",form,{headers:headers,responseType:"text"})
  }

}
