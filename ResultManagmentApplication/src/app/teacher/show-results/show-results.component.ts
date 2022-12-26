import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Student } from 'src/app/model/student';
import { ResultService } from 'src/app/service/result.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit {

  allResults:any =[];
  
  totalStudents : number =0

  constructor(private service : ResultService) { }

  ngOnInit(): void {
    this.service.getListOfResult().subscribe((data)=>{
      this.allResults = data;
      this.totalStudents = this.allResults.length;
    });
  }

  logout(){
    this.service.logout()
  }
  deleteResult(id:number){
      //console.warn()
      let index = this.allResults.findIndex((e: any) => e.id == id)
      //console.warn("index",index)
      //this.allResults.splice(id-1,1)
      this.allResults.splice(index,1)
      this.totalStudents -=1
      //console.warn("after delete",this.allResults)
      this.service.deleteResult(id).subscribe((result)=>{
        //console.warn("delete result",result)
      })
  }

}
