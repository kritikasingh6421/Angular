import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private service: ResultService) { }
  
  ngOnInit(): void {
  }

  alert : boolean = false;
  message : string = '';
  student:any = [];

  back(){
    this.service.back()
  }
  
  logout(){
      this.service.logout()
  }

  onSubmit(data:any){
    this.service.getResultByRollNo(data.rollno).subscribe((result:any)=>{
        this.student = result as Student; 
        if(this.student.name == data.name){
          this.service.setSearchResult(result)
        }
        else{
          this.alert = true
          this.message = 'Name does not match with the record!!'
        }
    },()=>{
      console.warn("Something went wrong while searching result!!")
      this.alert = true
      this.message = 'Roll Number does not exist!!'
    })
  }
}
