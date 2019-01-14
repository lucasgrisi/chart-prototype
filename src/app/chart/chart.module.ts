import { ChartComponent } from './chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule } from 'angular-svg'

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SvgCircleModule,
    SvgLineModule,
    SvgPolygonModule,
    SvgPolylineModule,
    SvgTextModule,
    SvgPathModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
