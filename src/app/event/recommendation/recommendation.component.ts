import { ToastrService } from 'ngx-toastr';
import { MyEventsService } from './../myevents.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { DetailsEventComponent } from '../details-event/details-event.component';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})


export class RecommendationComponent implements OnInit {
  

  message:number; 


  public colSize=4;
  public isMobile = false;
  constructor(breakingPointObserver: BreakpointObserver,public dialog:MatDialog,private eventService:MyEventsService,private toast:ToastrService) {
    
    
    breakingPointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result =>{
      this.isMobile = result.matches;
      if(this.isMobile){
        this.colSize = 1;
      }else{
        this.colSize = 4;
      }
    })
   }

  ngOnInit(): void {
    this.eventService.currentMessage.subscribe(message => this.message = message)
  }

  openDialog(){
    const dialogRef = this.dialog.open(DetailsEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  newMessage(message:number) {
    this.eventService.changeMessage(message);
  }

  ShowToast(toast:string){
    this.toast.success(toast,'You signup succesifully for ');
  }

}
