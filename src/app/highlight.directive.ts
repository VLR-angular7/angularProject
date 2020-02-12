import { Directive,ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.style.color="red";
    this.element.nativeElement.innerHTML="HELLO HYD";
  }

  @HostBinding('style.border') border;
  @HostBinding('style.color') mycolor;
  @HostBinding('attr.value') myValue;




  @HostListener('mouseover') submit(){                             //  (click)=Data()
    //this.element.nativeElement.style.color="green";
    //this.element.nativeElement.style.border="green";

    this.border="1px solid gray";
    this.mycolor="pink";
    this.myValue="Hello VLR"
  }

  @HostListener('mouseleave') onMouseleave(){                             //  (click)=Data()
    this.element.nativeElement.style.color="orange";
  }


}
