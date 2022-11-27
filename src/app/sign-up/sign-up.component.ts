import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  SignUpForm:FormGroup ;
  hide = true;

  constructor(private userservice:UserService,
          private formbuilder:FormBuilder,) {
            this.SignUpForm = this.formbuilder.group({
              nom: ['', Validators.required,],
              prenom: ['', Validators.required],
              email: ['', Validators.required],
              password: ['', Validators.required],
              sexe: ['', Validators.required],
              telephone: ['', Validators.required],
            });
          }

          
  ngOnInit(): void {
    localStorage.removeItem('currentUser')
  }
Signup(form:any){
  console.log(form)
  this.userservice.adduser(form).subscribe(data=>{
    console.log(data)
    },
    err=>{
    console.log(err)  })
  }
  

}
