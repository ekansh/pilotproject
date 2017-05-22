import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor() {
    console.log("Constructor called");
   }

  ngOnInit() {
    console.log("ngOnInit");
  }

  onSubmit(){
    console.log("onSubmit");
    console.log("username "+ this.username);
    console.log("password "+ this.password);
  }
}
