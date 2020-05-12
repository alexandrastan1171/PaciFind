import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPacientsPageComponent } from './all-pacients-page/all-pacients-page.component';


const routes: Routes = [
    {
        path:'',
        component:AllPacientsPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPacientsPageRoutingModule { }