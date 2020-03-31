import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorProfileContainerComponent } from './doctor-profile-container/doctor-profile-container.component';
import { DoctorDescriptionComponent } from './doctor-description/doctor-description.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';



@NgModule({
  declarations: [MenuComponent, 
    SidebarComponent, 
    DoctorProfileContainerComponent, 
    DoctorDescriptionComponent, LogInComponent, MainContainerComponent, ContactContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoctorProfileContainerComponent,
    MainContainerComponent,
    ContactContainerComponent
    
  ]
})
export class SharedModule { }
