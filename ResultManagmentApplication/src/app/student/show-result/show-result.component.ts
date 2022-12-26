import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {

  constructor(private service: ResultService) { }

  student:any = {}

  ngOnInit(): void {
    this.student = this.service.getSearchResult()
    console.warn("search-show-table",this.student)
  }

  logout(){
    this.service.logout()
  }
  back(){
    this.service.back()
  }

}
