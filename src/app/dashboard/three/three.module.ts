import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThreeComponent} from "./three.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: ThreeComponent
  }
]

@NgModule({
  declarations: [ThreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ThreeModule {

}
