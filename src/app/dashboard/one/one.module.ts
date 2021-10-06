import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneComponent} from "./one.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";


const routes: Routes = [
  {
    path: '',
    component: OneComponent,
  }
]

@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
  ]
})
export class OneModule {
}
