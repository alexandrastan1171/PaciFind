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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
