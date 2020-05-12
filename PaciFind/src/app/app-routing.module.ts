import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'doctor-page',
    loadChildren:() => import ('./doctor-page/doctor-page.module').then(module => module.DoctorPageModule)
  },
  {
    path:'login-page',
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
