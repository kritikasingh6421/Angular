import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Constants } from '../constants/constants';
import { StudentModule } from '../student/student.module';

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  constructor(private http: HttpClient, private location: Location,private router : Router) { }

  searchResult:any = {}

  back(){
    this.location.back();
  }
  
  logout(){
    this.router.navigate([''])
  }

  setSearchResult(result:StudentModule){
     this.searchResult = result
     this.router.navigate(['student/search-result/show-result'])
  }

  getSearchResult(){
     return this.searchResult
  }

  getListOfResult(){
    return this.http.get(Constants.apiURL); 
  }

  getResultByRollNo(id:number){
    //console.warn("search url",Constants.apiURL+id)
    return this.http.get(Constants.apiURL+id);
  }

  saveResult(result:any){
    //console.warn("service:",Constants.apiURL,result)
    return this.http.post(Constants.apiURL,result);
  }

  deleteResult(id:number){
    return this.http.delete(Constants.apiURL+id)
  }

  updateResult(id:number, data:any){
      return this.http.put(Constants.apiURL+id,data)      
  }
}
