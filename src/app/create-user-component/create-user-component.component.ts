import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user-component',
  templateUrl: './create-user-component.component.html',
  styleUrls: ['./create-user-component.component.css']
})
export class CreateUserComponentComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("firstname " + this.firstname + " lastname " + this.lastname +
     " username " + this.username + " email " + this.email + " password " +
      this.password + " confirm Password " + this.confirmPassword);
  }


}
