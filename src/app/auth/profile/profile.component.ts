import { NgForm } from '@angular/forms';
import { User, UserService } from './../user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing:boolean  = false;
  profileForInput:User
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public User: UserService) { }

  ngOnInit(): void {
    this.profileForInput = {
      id:this.data.user.id,
      email:this.data.user.email,
      password : this.data.user.password,
      address : this.data.user.address,
      date: new Date()
    }
    
  }
  finshEditing(editForm:NgForm){
    this.data.user.email = this.profileForInput.email;
    this.data.user.passwoed = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;

    console.log(this.data.user);
    console.log(UserService.dumyList);
    this.isEditing = false;
  }

}
