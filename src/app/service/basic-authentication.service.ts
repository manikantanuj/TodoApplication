
import { API_URL } from './../app.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { HelloWorldBean } from './data/welcome-data.service';
import {map} from 'rxjs/operators'; 

export const TOKEN = 'authenticationToken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  executeJWTAuthenticationService(username,password){

    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password

    }).pipe( 
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;
        }
      )
     );
  }

  executeAuthenticationService(username,password){

    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +password);

    
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
  
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers:headers}).pipe( 
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;
        }
      )
     );
  }
  
  //anuj:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/anuj' from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
  //after passing headers
  //Response to preflight request doesn't pass access control check: It does not have HTTP ok status.


/*  // isUserLoggedInVar = false;
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
  } */

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN);
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user ===null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
  
}
export class AuthenticationBean{
  constructor(public message:String){}
}
