import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { InsertItemComponent } from './insert-item/insert-item.component';
import { ItemNodeComponent } from './item-node/item-node.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginLayoutComponent},
  {path:'register',component:SignupComponent},
  // {path:'**',component:LoginLayoutComponent},
  {path:'admin',component:MainLayoutComponent,
  // canActivate:[AuthGuard],
      children:[
        {path:'main',component:HomeComponent},
        {path:'insert',component:InsertItemComponent},
        {path:'items' , component:ItemNodeComponent},
      ]
},
{path:'**',component:NotFoundPageComponent}
  // {path:'items' , component:ItemNodeComponent},
  // {path:'home', component:HomeComponent},
  // {path:'', component:HomeComponent},
  // {path:'insert',component:InsertItemComponent},
  // {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
