import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SearchResultComponent,
    ShowResultComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    SearchResultComponent,
    ShowResultComponent
  ]
})
export class StudentModule { }
