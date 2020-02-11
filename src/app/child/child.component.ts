import { Component, OnInit,Input,OnChanges, SimpleChanges, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  @Output() messageToparent= new EventEmitter();
  counter=0;
  constructor(){

  }
  ngOnInit(){

  }

  sendDataToParent(){
    this.counter=this.counter +1;
    this.messageToparent.emit(this.counter)
  }

}
