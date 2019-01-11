import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  box: String = '';
  apps = [];

  
  constructor() { }
  
  ngOnInit() {
  }

  addBox(){
    this.apps.push(this.box);
    console.log(this.apps);
  }

  updateBox(event){
    this.box = event.target.value
  }

}
