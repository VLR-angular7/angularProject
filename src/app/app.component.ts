import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularProject';
  isAdmin:boolean=false;
  employees:any
  countValue:number
  mobiles=[];
  name:string
  ngOnInit(){
     this.name="List of Mobiles"
  this.mobiles=this.getMobiles();
  }

//   displayMessage(count){
// this.countValue=count;
//   }
updatemobile:any;
  updateStockStatus(data){
    this.mobiles.forEach(product=>{
      console.log(product);
      if(data.id==product.id){
        console.log("inside if "+JSON.stringify(product))
         this.updatemobile=product;
      }
    })

    console.log("input stock value :"+data.stock)
    console.log("current stock :"+this.updatemobile.stock)
     this.updatemobile.stock=this.updatemobile.stock+data.stock;
  }


  getMobiles(){
    return [{id:10,name:"Redmi5",price:7000,stock:25},{id:11,name:"Redmi6",price:7000,stock:20},{id:17,name:"OnePlus8",price:17000,stock:5},{id:12,name:"Redmi7",price:7000,stock:20},{id:13,name:"Redmi9",price:7000,stock:30}]
  }

}
