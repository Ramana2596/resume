import { Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  constructor( public route: Router) {
   }

  ngOnInit() {
  }

  public loginClick(args){
    let emailId = (<HTMLInputElement>document.getElementById("emailInput")).value;
    let password = (<HTMLInputElement>document.getElementById("passwordInput")).value;
    if(typeof emailId != 'undefined' && emailId && typeof password != 'undefined' && password){
      alert("Login successful");
    } else{
      alert("Please enter valid details");
    }
  }
}
