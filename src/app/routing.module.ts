import { RatingStarComponent } from './event/rating-star/rating-star.component';
import { RecommendationComponent } from './event/recommendation/recommendation.component';
import { EventComponent } from './event/event.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import{Routes,RouterModule} from '@angular/router';


const rute:Routes = [
    { path:'',component: WelcomeComponent},
    { path:'welcome',component: WelcomeComponent},
    { path:'login',component:LoginComponent},
    { path:'signup',component:SignupComponent},
    { path:'event',component:EventComponent},
    { path:'rec',component:RecommendationComponent},
    { path:'star',component:RatingStarComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(rute)],
    exports:[RouterModule]
})

export class RoutingModule{

}