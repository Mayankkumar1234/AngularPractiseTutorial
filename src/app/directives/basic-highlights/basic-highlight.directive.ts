import { Directive, ElementRef } from "@angular/core";



@Directive({
    selector:'[appBasicHightlight]'
})


export class BasicHighLightDirective{

constructor(private el:ElementRef){
this.el.nativeElement.style.backgroundColor = 'green'
}

ngOnInit(){
    this.hovertext();
}
hovertext(){
  this.el.nativeElement.hovertext.style.backgroundColor = 'yellow'
}

}