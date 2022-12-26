import { Component, OnInit } from '@angular/core';
import { Constants } from './constants/constants';
import { ResultService } from './service/result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }
  
  title = 'ResultManagmentApplication';
}
