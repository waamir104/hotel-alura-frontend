import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
