import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FourComponent} from "./four.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: FourComponent
  }
]

@NgModule({
  declarations: [FourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FourModule {
}
