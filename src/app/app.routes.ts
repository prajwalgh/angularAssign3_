import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'students',component:StudentsComponent},
    {path:'login',component:LoginComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'logout',component:LogoutComponent},
    {path:'register',component:RegisterComponent},
];
