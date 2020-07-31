import { RatingStarComponent } from './../rating-star/rating-star.component';
import { Component, OnInit } from '@angular/core';
import{MyEventsService} from '../myevents.service';
import { MyEvents } from '../my-events.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {

  constructor( public eventService:MyEventsService,private toast:ToastrService) { }

  message:number;

  ngOnInit(): void {
    this.eventService.currentMessage.subscribe(message => this.message = message)
  }

  SignedUpEvent(eventName:string){
    var eventForAdding:MyEvents = MyEventsService.myEvents.find(event => event.eventName == eventName);

    MyEventsService.signedUpEvents.push(eventForAdding);

    console.log(MyEventsService.signedUpEvents);
}

getName(index:number){
  return  MyEventsService.myEvents[index].eventName;
}

getDescription(index:number){
  return  MyEventsService.myEvents[index].description;
}

getImage(index:number){
  return  MyEventsService.myEvents[index].image;
}

ShowToast(toast:string){
  this.toast.success(toast,'You signup succesifully for ');
}




}
