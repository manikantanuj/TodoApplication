import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


//creating a class to take response in a generic way ---response.message

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
  return  this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
   // console.log("Excecute Hello World Bean Service");
  }
//http://localhost:8080/hello-world/path-variable/anuj

executeHelloWorldServiceWithPathVariable(name){

  // let basicAuthHeaderString = this.createBasicHttpHeaders();
  
  // let headers = new HttpHeaders({
  //   Authorization:basicAuthHeaderString
  // })

  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`
  // {headers:headers}
  );
}

//anuj:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/anuj' from origin 'http://localhost:4200' has been blocked by CORS policy:
// No 'Access-Control-Allow-Origin' header is present on the requested resource.
//after passing headers
//Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
// createBasicHttpHeaders(){
//   let username='anuj';
//   let password ='anuj';
//   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +password);
//   return basicAuthHeaderString;
// }
}
