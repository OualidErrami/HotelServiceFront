import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { AccueilComponent } from './accueil/acceuil.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { ReservationComponent } from './reservation/reservation.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRippleModule} from '@angular/material/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatStepperModule} from '@angular/material/stepper'; 
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AccueilComponent,
    NavbarComponent,
    ReservationComponent,
    TestComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatRippleModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCommonModule,
    MatIconModule,
    NgbDropdownModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
