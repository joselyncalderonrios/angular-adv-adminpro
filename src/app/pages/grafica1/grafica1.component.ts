import { Component } from '@angular/core';
import { DatasetChartOptions } from 'chart.js';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public titulo1:string='Sales';
  public labels1:string[] = ['Josy','Calderon','Ventas'];
  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [38, 59, 100],
        backgroundColor: ["#6857E6", "#009FEE", "#F02059"]
      }
    ]
  };


  public titulo2:string='Buy';
  public labels2:string[] = ['Download Compras','In-Store Compras','Mail-Order Compras'];
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      {
        data: [80, 60, 30],
        backgroundColor: ["#6857E6", "#009FEE", "#F02059"]
      }
    ]
  };

    public titulo3:string='Cambios';
    public labels3:string[] = ['Download Compras','In-Store Compras','Mail-Order Compras'];
    public doughnutChartData3: ChartData<'doughnut'> = {
      labels: this.labels3,
      datasets: [
        {
          data: [15, 10, 30],
          backgroundColor: ["#6857E6", "#009FEE", "#F02059"]
        }
      ]
    };


      public titulo4:string='Pre-cambios';
      public labels4:string[] = ['Download Compras','In-Store Compras','Mail-Order Compras'];
      public doughnutChartData4: ChartData<'doughnut'> = {
        labels: this.labels4,
        datasets: [
          {
            data: [40, 50, 30],
            backgroundColor: ["#6857E6", "#009FEE", "#F02059"]
          }
        ]
      };
}
