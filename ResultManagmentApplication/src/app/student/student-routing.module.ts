import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShowResultComponent } from './show-result/show-result.component';
const routes: Routes = [
  { path: 'search-result', component: SearchResultComponent },
  { path: 'search-result/show-result', component: ShowResultComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
