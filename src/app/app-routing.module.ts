import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:HeadlinesComponent},
  {path:'technology',component:TechnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
