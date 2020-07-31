import { MatIconModule } from '@angular/material/icon';
import { RoutingModule } from './routing.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { RecommendationComponent } from './event/recommendation/recommendation.component';
import { PlaningComponent } from './event/planing/planing.component';
import { MyEventsComponent } from './event/my-events/my-events.component';
import { MyEventsService } from './event/myevents.service';
import { UserService } from './auth/user.service';
import { DetailsEventComponent } from './event/details-event/details-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './auth/profile/profile.component';
import { RatingStarComponent } from './event/rating-star/rating-star.component';
import { ToastComponent } from './event/toast/toast.component';






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    EventComponent,
    RecommendationComponent,
    PlaningComponent,
    MyEventsComponent,
    DetailsEventComponent,
    ProfileComponent,
    RatingStarComponent,
    ToastComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
  ],
  providers: [MyEventsService,UserService],
  bootstrap: [AppComponent],
  entryComponents:[DetailsEventComponent,ProfileComponent]
})
export class AppModule { }
