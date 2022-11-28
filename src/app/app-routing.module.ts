import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component:UserComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'sign-in',
        component:SignInComponent
      },
      {
        path:'sign-up',
        component:SignUpComponent
      }
    ]
  },

  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
