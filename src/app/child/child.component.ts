import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input () empData:[];
  @Input() loggedInUser:boolean
  @Input() title : string;
  name:string
  welcomeMsg:string="Heloo Angular"



  constructor() { 

    console.log("Constructor called")
  }

  ngOnInit(){
    console.log("oninit called")
  }


  sayHello(){
    alert("Welcome to ANgular Components")
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
  //   if(changes.loggedInUser.currentValue==true){
  //     this.name="Admin logged in"
  //   }
  //   else{
  //     this.name="Other user logged in"
  //   }
  //   console.log(changes)
   }

}
