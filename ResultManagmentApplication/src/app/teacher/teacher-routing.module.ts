import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResultComponent } from './add-result/add-result.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { UpdateResultComponent } from './update-result/update-result.component';
const routes: Routes = [
  
      {path:'show-results/add-result',component:AddResultComponent},
      {path:'show-results',component:ShowResultsComponent},
      {path:'show-results/update-result/:id',component:UpdateResultComponent}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
