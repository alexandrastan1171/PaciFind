import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPacientsPageComponent } from './all-pacients-page/all-pacients-page.component';
import { SharedModule } from '../shared/shared.module';
import { AllPacientsPageRoutingModule } from './all-pacients-page.routing.module';



@NgModule({
  declarations: [AllPacientsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllPacientsPageRoutingModule
  ]
})
export class AllPacientsPageModule { }
