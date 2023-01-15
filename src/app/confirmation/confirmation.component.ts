import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  httpHeaders:HttpHeaders
  token:any
  reservationForms:FormGroup
  firstFormGroup:FormGroup
  secondFormGroup:FormGroup
  ThirdFormGroup:FormGroup
  todayDate:Date = new Date();
  email=JSON.parse(localStorage.getItem('currentUser') || '{}')['email']
 

  constructor(private reservationservice:ReservationService,
    private formbuilder:FormBuilder    
    ) {
      
    this.token = JSON.parse(localStorage.getItem('currentUser') || '{}')['token'];
    this.httpHeaders = new HttpHeaders()
    .set('Authorization', "Bearer "+this.token)
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', ' POST, GET, OPTIONS, DELETE')
    ; 
    this.reservationForms=this.formbuilder.group(
      {
        dateDeDebut:['', Validators.required],
        dateDeFin:['', Validators.required],
        client:{email:this.email}
      }),
      this.firstFormGroup=this.formbuilder.group(
        {
          nom:['', Validators.required],
        }
      ),
      this.secondFormGroup=this.formbuilder.group(
        {
          dateDeDebut:['', Validators.required],
        }
      ),
      this.ThirdFormGroup=this.formbuilder.group(
        {
          datedefin:['', Validators.required],
        }
      )
   }
   

  ngOnInit(): void {

  }
  onStepChange(event: any): void {
    this.reservationForms.controls['dateDeDebut'].setValue(this.secondFormGroup.controls['dateDeDebut'].value.toLocaleDateString())
    this.reservationForms.controls['dateDeFin'].setValue(this.ThirdFormGroup.controls['datedefin'].value.toLocaleDateString())
}

  submit(form:any){

    console.log(form)
    
     this.reservationservice.makereservation(form,this.httpHeaders).pipe().
     subscribe(data=>{
       if(data.includes('Deja reserve'))
       {
         alert('rooms are full')
       }
     },err=>{
       console.log(err)
    
     }) 
   }
  
}
