import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css' ]
})
export class ProgressComponent {

  progres1:number=20
  progres2:number=15

  
  get getPorcentaje1(){
    return `${this.progres1}%`
  }

  get getPorcentaje2(){
    return `${this.progres2}%`
  }


}
