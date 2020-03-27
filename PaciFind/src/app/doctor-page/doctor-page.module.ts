import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorPageRoutingModule } from './doctor-page.routing.module';
import { SharedModule } from '../shared/shared.module';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';



@NgModule({
  declarations: [DoctorPageComponent],
  imports: [
    CommonModule,
    DoctorPageRoutingModule,
    SharedModule
  ]
})
export class DoctorPageModule { }
