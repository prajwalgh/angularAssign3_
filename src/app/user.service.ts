import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn:boolean=false;
  message:string='';
  constructor(){

  }
  performLogin(username:string,password:string){
    if(username=='admin'&&password=='admin'){
      this.isUserLoggedIn=true;
    }
    else{
      this.isUserLoggedIn=false;
    }
    return this.isUserLoggedIn;
  }
}
