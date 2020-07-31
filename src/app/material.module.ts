
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatCheckboxModule} from '@angular/material/checkbox';
import{MatSidenavModule} from '@angular/material/sidenav'
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from  '@angular/material/list';
import {MatTabsModule} from  '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import{NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

 




@NgModule({
    imports:[MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        NgbCarouselModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatExpansionModule,
        
        ToastrModule.forRoot({
            
            timeOut:1500,
            progressBar:true,
            progressAnimation:'increasing',
            preventDuplicates:true,
            positionClass: 'toast-top-full-width' 
            
            

        })
    ],
    exports:[MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule ,
        MatDialogModule,
        NgbCarouselModule,
        BrowserAnimationsModule,
        ToastrModule,
        MatSelectModule,
        MatExpansionModule  
    ]
})

export class MaterialModule{}