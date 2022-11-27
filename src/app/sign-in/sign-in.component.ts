import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  SignInForm:FormGroup;
  submitted=false;
  invalid=false;
  constructor(
    private formbuilder:FormBuilder,
    private userService:UserService,
    private router:Router,
    ) 
    {
      this.SignInForm=this.formbuilder.group(
        {
          email: ['', Validators.required],
          password: [null, Validators.required],
        }
      )
     }

  ngOnInit(): void {
    localStorage.removeItem('currentUser')
  }

  SignIn(form:any){
  this.submitted=true
  
    this.userService.SignIn(form).pipe(first()).subscribe(data=>{
      this.router.navigate(['/accueil']) 
      if(!data.email){
        this.invalid=true
      }
    },
    err=>{
      console.log(err)
    }
    )}

}