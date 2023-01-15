import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesserviceService {
  public host:String="http://localhost:8001/"
  constructor(private http:HttpClient) { }


  public getimage(headers:HttpHeaders){
    return this.http.get<any>(this.host+"photo/photos/1",{headers:headers})
  }

}
