import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
selector:'favourite',
template:`
    <i class="glyphicon"
        [class.glyphicon-star-empty]="!isfavourite"
        [class.glyphicon-star]="isfavourite"
        (click)="onClick()">
        </i>
`,
styles :[
`.glyphicon-star {
    color:orange;
}`
], 
inputs:['isfavourite:is-favourite'],
})
export class FavouriteComponent{
@ Input('is-favourite') isfavourite = false;
@ Output() change = new EventEmitter();
onClick(){
this.isfavourite = !this.isfavourite;
this.change.emit({newValue :this.isfavourite});
}
}