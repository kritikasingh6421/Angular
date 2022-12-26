import { Component, OnInit } from '@angular/core';
import { StudentModule } from 'src/app/student/student.module';
import { ResultService } from 'src/app/service/result.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent implements OnInit {

  constructor(private service: ResultService) { }

  alert: string = ''
  ngOnInit(): void {
  }

  onSubmit(data:StudentModule){
    console.warn(data);
    this.service.saveResult(data).subscribe((result)=>{
      console.warn("post:",result)
    },()=>{
      this.alert = 'warn'
    },()=>{
      this.alert = 'success'
    });
  }

  logout(){
    this.service.logout()
  }
  back(){
    this.service.back()
  }
  cut(){
    this.alert = ''
  }
}
