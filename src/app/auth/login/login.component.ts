import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = "";
  constructor(private userService:UserService,private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
   var email = form.value.email;
    var password = form.value.password;

    var user = this.userService.getUser(email);
    if(!user){
      this.errorExists == true;
      this.errorText = "There is no registrated user with email" + email;
      return;
    }

    var isPasswordcorect = this.userService.isPasswordCorect(email,password);

    if(!isPasswordcorect){
      this.errorExists == true;
      this.errorText = "Password is incorect" + email;
    }

    this.errorExists = false;
    this.router.navigate(['']);
  }

}
