import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string=''
  password:string=''
  message:string=''
  constructor(private r:Router){

  }


  perform_login(){
    if(this.username=='admin'&&this.password=='admin')
    {
      this.message='login success'
      // SHOW STUDENTS VIEW TO USER 
      this.r.navigate(['students']) // This is programmatic navigation
    }
    else{
      this.message='login failed'
    }

  }

}
