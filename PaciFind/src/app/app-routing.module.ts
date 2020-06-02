import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers';


const routes: Routes = [
  {
    path:'doctor-page',
    loadChildren:() => import ('./doctor-page/doctor-page.module').then(module => module.DoctorPageModule)
  },
  {
    path:'',
    loadChildren:() => import ('./login-page/login-page.module').then(module => module.MainPageModule)
  },
  {
    path:'contact-page',
    loadChildren:() => import ('./contact-page/contact-page.module').then(module => module.ContactPageModule)
  },
  {
    path:'pacients-page',
    loadChildren:() => import ('./all-pacients-page/all-pacients-page.module').then(module => module.AllPacientsPageModule)
  },
  {
    path:'',
    loadChildren:() => import ('./main-page/main-page.module').then(module => module.MainPageModule)
    , canActivate: [AuthGuard]
  },
  {
    path:'doctors-page',
    loadChildren:() => import ('./all-doctors-page/all-doctors-page.module').then(module => module.AllDoctorsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
