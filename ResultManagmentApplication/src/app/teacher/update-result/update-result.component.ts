import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.scss']
})
export class UpdateResultComponent implements OnInit {

  constructor(private service: ResultService, private router : ActivatedRoute) { }

  //@ViewChild('update') form : NgForm;

  resultToUpdate:any =[]
  id : number = 0
  alert : string = '' 

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.service.getResultByRollNo(this.id).subscribe((result)=>{
        this.resultToUpdate = result
        console.warn("value to update:",this.resultToUpdate)
    },
    ()=>{
        console.warn("something went wrong")
    })
  }

  back(){
    this.service.back()
  }

  logout(){
    this.service.logout()
  }
  updateResult(data:Student){
    this.service.updateResult(this.id,data).subscribe((result)=>{
        console.warn("after update",result)
    },()=>{
      this.alert = 'warn' 
    },()=>{
      this.alert='success'
    })
  }

}
