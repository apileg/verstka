import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwoComponent} from "./two.component";
import {RouterModule, Routes} from "@angular/router";
import {ChartModule} from "angular-highcharts";
import {HighchartsChartModule} from "highcharts-angular";

const routes: Routes = [
  {
    path: '',
    component: TwoComponent
  }
]

@NgModule({
  declarations: [TwoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ChartModule,
        HighchartsChartModule
    ]
})
export class TwoModule {
}
