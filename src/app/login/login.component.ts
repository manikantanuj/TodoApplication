import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "anuj";
  password ="";
  invalidLogin =false;
  errorMessage = "Invalid Credentials";

  handleLogin(){
if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
  //  if(this.username==="anuj" && this.password==="anuj")
    {

      this.invalidLogin=false;
      this.router.navigate(['welcome',this.username]);
    }
    else{
      this.invalidLogin=true;

    }
    console.log(this.username);

  }

  handleJWTAuthLogin(){
  this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
  .subscribe(data=>{
    console.log(data);
    this.invalidLogin=false;
    this.router.navigate(['welcome',this.username]);


  },
  error=>{
    console.log(console.error);
    this.invalidLogin=true;
  })
      //  if(this.username==="anuj" && this.password==="anuj")
        
    
      }
    

  constructor(private router: Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  

}
