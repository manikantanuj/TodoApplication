import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


 // isUserLoggedInVar = false;
  authenticate(username,password){
 //  console.log( "before " +this.isUserLoggedIn());
    if(username==="anuj" && password ==="anuj"){
      sessionStorage.setItem('authenticatedUser',username);
  //    console.log( "after " +this.isUserLoggedIn());
 // this.isUserLoggedInVar=true;
      return true;
    }
  //  this.isUserLoggedInVar=false;
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user ===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
