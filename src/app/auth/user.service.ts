import { Injectable } from '@angular/core';

export interface User{
  id:number;
  email:string;
  password:string;
  date:Date;
  address?:string;
  typeOfRelaxing?:string;
}

@Injectable()
export class UserService {

  currentUser:User = UserService.dumyList[0];
  static dumyList: Array<User> = [
    { id:1,
      email:'singi@gmail.com',
      password: 'singi555555',
      date: new Date("2020-05-0290 10:02")
    },
    { id:2,
      email:'singi2@gmsil.com',
      password: 'dingi555555',
      date: new Date("2020-05-0290 10:45")
    }
   
  ]

  getUserName(user:User):string{
    return user.email;
  }

  getUserById(id:number){
    var foundUser : User;

    UserService.dumyList.forEach(user=>{
      if(user.id == id){
        foundUser = user;
      }
    });
    this.currentUser = foundUser
    return foundUser;
  }

  getUser(userEmail:string):User{
     this.currentUser =  UserService.dumyList.find(userToFind => userToFind.email == userEmail);
     return this.currentUser;
  }

  isPasswordCorect(userEmail:string,password:string):boolean{
    return UserService.dumyList.find(userToFind =>
      (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }
  registerUser(email:string,password:string,date:Date):User{
     var maxid: number = 0;
     UserService.dumyList.forEach(user =>{
       if(maxid < user.id){
         maxid = user.id;
       }
     })

     var id = ++maxid;

     var user:User = {id,email,password,date};
     UserService.dumyList.push(user);

     console.log(user); 

     this.currentUser = user;
     return user;
  }
  constructor() { }
}
