import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title:string='Sin titulo';
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels:  ['Label 1','Label 2','Label 3'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ["#6857E6", "#009FEE", "#F02059"]
      }
    ]
  };


}
