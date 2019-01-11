import { ChartComponent } from './chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    DragDropModule
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
