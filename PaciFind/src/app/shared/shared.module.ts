import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorProfileContainerComponent } from './doctor-profile-container/doctor-profile-container.component';
import { DoctorDescriptionComponent } from './doctor-description/doctor-description.component';



@NgModule({
  declarations: [MenuComponent, 
    SidebarComponent, 
    DoctorProfileContainerComponent, 
    DoctorDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoctorProfileContainerComponent
    
  ]
})
export class SharedModule { }
