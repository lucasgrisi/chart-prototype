import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  box: String = '';
  apps = {};
  seta = false;
  tam = 0;
  tags = [];
  pos = [];
  dbclick = 0;
  posis = [];


  
  constructor() { }
  
  ngOnInit() {
  }

  addBox(){
    this.tags[this.tam] = {
      id:this.box,
      disabled:false
    };
    this.apps[`${this.box}`] = {
      index:this.tam,
      id: this.box,
      posicao: {
        x : null,
        y : null
      },
      ligacao : null
    };
    this.tam++;
  }

  updateBox(event){
    this.box = event.target.value
  }

  checkPosition(){
    document.getElementsByName('box').forEach((item, key) =>{
      this.pos[key]= item.getBoundingClientRect();
      this.apps[`${this.tags[key].id}`].posicao.x = this.pos[key].left;
      this.apps[`${this.tags[key].id}`].posicao.y = this.pos[key].top;
    });
    
  }

  setinha(tag){
    this.posis[this.dbclick] = this.apps[`${tag}`];
    this.dbclick++;
    
    if(this.dbclick==2){
      var canvas = document.getElementsByTagName('canvas');
      // console.log(canvas[0].getContext);
      var ctx = canvas[0].getContext('2d');

      console.log(this.posis);
  
      ctx.beginPath();
      ctx.moveTo(this.posis[0].posicao.x-8,this.posis[0].posicao.y-21);
      ctx.lineTo(this.posis[1].posicao.x-8,this.posis[1].posicao.y-21);
      // ctx.moveTo(0,0);
      // ctx.lineTo(0,100);
      ctx.stroke();

      this.tags[this.apps[`${tag}`].index].disabled=true;
      this.tags[this.apps[`${this.posis[0].id}`].index].disabled=true;
      this.apps[`${tag}`].ligacao = this.posis[0].id;
      this.apps[`${this.posis[0].id}`].ligacao = this.posis[1].id;

      console.log(this.posis);
      this.dbclick=0;
      this.posis = [];
    }
  
  }

  apagaLig(){
    var canvas = document.getElementsByTagName('canvas');
    var ctx = canvas[0].getContext('2d');
    ctx.clearRect(0, 0, 300, 150);
    for(let i=0;i<this.tam;i++){
      this.apps[`${this.tags[i].id}`].disabled=false;
    }
  }

}
