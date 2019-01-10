import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  box: String = '';
  boxArray = [];

  
  constructor() { }
  
  ngOnInit() {
  }

  addBox(){
    this.boxArray.push(this.box);
    console.log(this.boxArray);
  }

  updateBox(event){
    this.box = event.target.value
  }

}
