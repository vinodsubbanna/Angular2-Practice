import {Component} from 'angular2/core'

@Component({
    selector:'butclick',
    template: `
            <button (click)="onClick($event)">Submit</button>
            `
})
export class ButtonClickComponent{
onClick($event){
    console.log("clicked");
}
}