import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'one',
        loadChildren: () => import('./one/one.module').then(m => m.OneModule),
      },
      {
        path: 'two',
        loadChildren: () => import('./two/two.module').then(m => m.TwoModule),
      },
      {
        path: 'three',
        loadChildren: () => import('./three/three.module').then(m => m.ThreeModule),
      },
      {
        path: 'four',
        loadChildren: () => import('./four/four.module').then(m => m.FourModule),
      },
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
  ]
})
export class DashboardModule { }
