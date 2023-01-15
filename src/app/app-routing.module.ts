import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/acceuil.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthGuard } from './service/AuthGuard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:"SignUp",
    component:SignUpComponent,
    
  },
  {
    path:"SignIn",
    component:SignInComponent
  },
  {
    path:"reservation/:roomid",
    component:ReservationComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"confiramtion/:roomid",
    component:ConfirmationComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"accueil",
    component:AccueilComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"test",
    component:TestComponent,
  },
  {
    path : "" ,
    redirectTo:'SignUp',
    pathMatch:"full"  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
