import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SideNavigationComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
  // constructor(){
  //   console.log("Admin module loaded");
  // }
 }
