import { ProfileComponent } from './auth/profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from './auth/user.service';
import { Component } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relax-app-angular';
  profile:number;
  panelOpenState = false;

  profileOpened: boolean = false;

  constructor(public User:UserService,private dialog:MatDialog){}

  openProfile(userId: number){
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent,{
      disableClose:true,
      width:"25vw",
      data:{user:this.User.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe(result =>{
      this.profileOpened = false;
    }
    );
  }
}

