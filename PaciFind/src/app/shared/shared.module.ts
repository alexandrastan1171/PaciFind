import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorProfileContainerComponent } from './doctor-profile-container/doctor-profile-container.component';
import { DoctorDescriptionComponent } from './doctor-description/doctor-description.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { MainPageContainerComponent } from './main-page-container/main-page-container.component';
import { AllPacientsPageContainerComponent } from './all-pacients-page-container/all-pacients-page-container.component';
import { PacientsListComponent } from './pacients-list/pacients-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AllDoctorsPageContainerComponent } from './all-doctors-page-container/all-doctors-page-container.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [MenuComponent, 
    SidebarComponent, 
    DoctorProfileContainerComponent, 
    DoctorDescriptionComponent, 
    LogInComponent, 
    LoginContainerComponent, 
    ContactContainerComponent, 
    MainPageContainerComponent, 
    AllPacientsPageContainerComponent, 
    PacientsListComponent, 
    SearchBarComponent, AllDoctorsPageContainerComponent, DoctorsListComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DoctorProfileContainerComponent,
    LoginContainerComponent,
    ContactContainerComponent,
    MainPageContainerComponent,
    AllPacientsPageContainerComponent,
    AllDoctorsPageContainerComponent
    
  ]
})
export class SharedModule { }
