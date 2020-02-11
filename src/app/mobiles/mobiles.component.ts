import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit,OnChanges {

  @Input () mobileId :number
  @Input () stock :number
  @Output() updateStock = new EventEmitter()
  updateStockValue:number;
color='';
  constructor() { }

  ngOnInit() {
    
  }

  changeStock(){
    this.updateStock.emit({id:this.mobileId,stock:this.updateStockValue})
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes.stock.currentValue)
if(changes.stock.currentValue>20){
  this.color='green'
}
else{
  this.color="red";
}



  }

}
