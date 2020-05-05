import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message="Some Welcome Message";
name = "";
responseMessage:string;
errorMessage:string;
  constructor(private route:ActivatedRoute, private welcomeDataService:WelcomeDataService) { }
 
  ngOnInit(){
    console.log(this.message);
    // console.log();  
    this.name=this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log("Get Welcome message");
   console.log( this.welcomeDataService.executeHelloWorldBeanService());
   this.welcomeDataService.executeHelloWorldBeanService().subscribe(
 response => this.handleSuccessfulResponse(response),
 error=> this.handleErrorResponse(error)
 

   );
   console.log("last line of get welcome message");
  }
  handleErrorResponse(error){
   console.log(error.error.message
   );
   this.responseMessage= error.error.message
  }

  handleSuccessfulResponse(response){
  this.responseMessage= response.message;
  console.log(response.message)
  }
  

  getWelcomeMessageWithParameter(){
    console.log("Get Welcome message");
   console.log( this.welcomeDataService.executeHelloWorldBeanService());
   this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
 response => this.handleSuccessfulResponse(response),
 error=> this.handleErrorResponse(error)
 

   );
   console.log("last line of get welcome message");
  }

}
