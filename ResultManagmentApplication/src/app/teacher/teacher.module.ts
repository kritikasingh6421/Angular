import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ShowResultsComponent } from './show-results/show-results.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { AddResultComponent } from './add-result/add-result.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    ShowResultsComponent,
    UpdateResultComponent,
    AddResultComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports:[
    ShowResultsComponent,
    UpdateResultComponent,
    AddResultComponent
  ]
})
export class TeacherModule { }
