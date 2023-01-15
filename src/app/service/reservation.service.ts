import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public host:String="http://localhost:8001"
  constructor(private http:HttpClient) { }
  
  public makereservation(form:FormGroup,headers:HttpHeaders){
    return this.http.post(this.host+"/service/MakeReservation",form,{headers:headers,responseType:"text"})
  }
  public getrooms(id:any,headers:HttpHeaders){
    return this.http.get<any>(this.host+"/room/getRoom/"+id,{headers:headers})
  }
  public getallrooms(headers:HttpHeaders){
    return this.http.get<any>(this.host+"/room/getRooms",{headers:headers})
  }

}
