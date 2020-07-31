import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  showingElement:string = "Sport";
  public colSize=2

  public images = ['kup.jpg','exit.jpg','guca.jpg','kalemegdan.jpg'].map((n) => `../../../assets/images/${n}`);
  constructor() { }

  ngOnInit(): void {
  }

  

}
