import { MyEvents } from './my-events.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class MyEventsService{

    private messageSource = new BehaviorSubject(0);
    currentMessage = this.messageSource.asObservable();
    
   public static myEvents :MyEvents[] = [
        {eventName:'Exit',startTime:new Date(2020, 6,29 ),location:'petrovaradinska tvrdjava' ,rate:3,type:'entertanment',attendance:2345,image:"../../../assets/images/exit.jpg",
        description:" Exit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will "},
        {eventName:'Guca',startTime:new Date(2020, 6, 24),location:'Dragacevo' ,rate:5,type:'entertanment',attendance:3350,image:"../../../assets/images/guca.jpg",
        description:"Exit  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will "},
        {eventName:'FK Partizan-FKVojovodina',startTime:new Date(2020, 6, 4),location:'Stadion Cair' ,rate:4,type:'sport',attendance:35000,image:"../../../assets/images/kup.jpg",
        description:"Fk Partizan  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will "},
        {eventName:'Kalemegdan',startTime:new Date(2020, 6, 25),location:'kalemegdanska tvrdjava' ,rate:4.5,type:'sport',attendance:5321,image:"../../../assets/images/kalemegdan.jpg",
        description:"Kalemegdan  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will "}
    ];

    public static signedUpEvents :MyEvents[] =[];
    getMyEvents(){
        return MyEventsService.myEvents;
    }

    getMySignedUpEvents(){
        return MyEventsService.signedUpEvents;
    }

    changeMessage(message: number) {
        this.messageSource.next(message)
      }

   

    
}


