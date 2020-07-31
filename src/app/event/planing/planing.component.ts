import { RatingStarComponent } from './../rating-star/rating-star.component';
import { MyEvents } from './../my-events.model';
import { MyEventsService } from './../myevents.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrls: ['./planing.component.css']
})
export class PlaningComponent implements OnInit,AfterViewInit {

  currentRate = 8;
  displayColumns = ['eventName','startTime','location','rate','type','attendance'];
  myeventsSource = new MatTableDataSource<MyEvents>();

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private myeventsService:MyEventsService,private dialog:MatDialog) { }

  public displayedColumns: string[] = ['eventName', 'startTime', 'location', 'rate', "type","attendance","actions"];
  ngOnInit(): void {
    this.myeventsSource.data = this.myeventsService.getMySignedUpEvents();
  }

  ngAfterViewInit(){
    this.myeventsSource.sort = this.sort;
    this.myeventsSource.paginator = this.paginator;
  }
  doFilter(filterValue:string){
    this.myeventsSource.filter = filterValue.trim().toLowerCase();
  }
  openDialogRating(){
    const dialogRef = this.dialog.open(RatingStarComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getValue(event:any) {
    let value = event.target.value;
    console.log("value", value);
}

}
