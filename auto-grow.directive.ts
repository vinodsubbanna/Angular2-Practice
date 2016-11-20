import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector:'[autoGrow]', // [] represents an attribute
    host : {                            // represents the events triggered in the directive
        '(focus)' : 'onFocus()', 
        '(blur)': 'onBlur()'   
    }

})
export class AutoGrowDirective{
constructor(private el:ElementRef, private renderer:Renderer){
}

onFocus(){
this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
}
onBlur(){
this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
}
}