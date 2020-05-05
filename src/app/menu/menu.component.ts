import { WelcomeComponent } from './../welcome/welcome.component';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//  isUserLoggedIn=false;
 
  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {

// this.isUserLoggedIn =this.hardcodedAuthenticationService.isUserLoggedIn();

}

}