import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { CategoryComponent } from './user/category/category.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NavigationComponent } from './user/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CategoryComponent,
    SignInComponent,
    SignUpComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
