import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart2.component.html',
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
  lines = [];
  modalData;


  
  constructor() { }
  
  ngOnInit() {
  }

  addBox(){
    var ok=true;
    for(let i=0;i<this.tam && ok;i++){
      if(this.tags[i].id === this.box) ok=false;
    }
    if(ok && this.box !== ''){
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
        ligacao : [],
        appLabel:null,
        imageVersion:null,
        replicas:null,
        portaExterna:null,
        cpuLimit:null,
        cpuBase:null,
        memoryLimit:null,
        memoryBase:null
      };
      this.tam++;  
    }
    this.box = '';
  }

  updateBox(event){
    this.box = event.target.value
  }

  checkPosition(){
    let lista = document.getElementsByName('box');
    for(let i=0; i<lista.length;++i){
      this.pos[i]= lista[i].getBoundingClientRect();
      this.apps[`${this.tags[i].id}`].posicao.x = this.pos[i].left;
      this.apps[`${this.tags[i].id}`].posicao.y = this.pos[i].top;
    }
    console.log(this.apps);
    
  }

  setinha(tag){
    this.posis[this.dbclick] = this.apps[`${tag}`];
    this.dbclick++;
    
    if(this.dbclick==2){
      // var canvas = document.getElementsByTagName('canvas');
      // console.log(canvas[0].getContext);
      // var ctx = canvas[0].getContext('2d');

      console.log(this.posis);
  
      this.lines.push({x1: this.posis[0].posicao.x-12, y1: this.posis[0].posicao.y-25, x2: this.posis[1].posicao.x-12,
         y2: this.posis[1].posicao.y-25});
      // ctx.beginPath();
      // ctx.moveTo(this.posis[0].posicao.x-8,this.posis[0].posicao.y-21);
      // ctx.lineTo(this.posis[1].posicao.x-8,this.posis[1].posicao.y-21);
      // ctx.moveTo(0,0);
      // ctx.lineTo(0,100);
      // ctx.stroke();

      this.tags[this.apps[`${tag}`].index].disabled=true;
      this.tags[this.apps[`${this.posis[0].id}`].index].disabled=true;
      this.apps[`${tag}`].ligacao.push(this.posis[0].id);
      this.apps[`${this.posis[0].id}`].ligacao.push(this.posis[1].id);

      console.log(this.posis);
      this.dbclick=0;
      this.posis = [];
    }
  
  }

  apagaLig(){
    // var canvas = document.getElementsByTagName('canvas');
    // var ctx = canvas[0].getContext('2d');
    // ctx.clearRect(0, 0, 300, 150);
    // for(let i=0;i<this.tam;i++){
    //   this.apps[`${this.tags[i].id}`].disabled=false;
    // }
    this.box = '';
    this.apps = {};
    this.seta = false;
    this.tam = 0;
    this.tags = [];
    this.pos = [];
    this.dbclick = 0;
    this.posis = [];
    this.lines = [];
  }


}
