import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'doctor-page',
    loadChildren:() => import ('./doctor-page/doctor-page.module').then(module => module.DoctorPageModule)
  },
  {
    path:'main-page',
    loadChildren:() => import ('./main-page/main-page.module').then(module => module.MainPageModule)
  },
  {
    path:'contact-page',
    loadChildren:() => import ('./contact-page/contact-page.module').then(module => module.ContactPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
