import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent' ;

  @HostBinding('style.backgroundColor') backgroundColor: string; /// 'transparent';

  constructor(private elementref: ElementRef,  private renderedr: Renderer2) {

  }


  ngOnInit()  {

   this.backgroundColor = this.defaultColor;
  }



  @HostListener('mouseenter') mouseOver(eventdata: Event)  {
   // this.renderedr.setStyle(this.elementref.nativeElement, 'background-color', 'green');
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave(eventdata: ElementRef) {
    // this.renderedr.setStyle(this.elementref.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;  // 'pink';
  }


}
