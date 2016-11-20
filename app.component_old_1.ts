import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavouriteComponent} from './favourite.component'
import {AutoGrowDirective} from './auto-grow.directive'
import {ButtonClickComponent} from './button.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetsComponent} from './tweets.component'
import {ViewModeComponent} from './viewmode.component'
import {PipeComponent} from './pipe.component'
import {SummaryPipe} from './summary.pipe'
import {BootstrapPanel} from './bootstrap.panel.component'

@Component({
    selector: 'my-app',
    template: `
       <input type="text" bindon-ngModel="title" autoGrow> 
       <input type="text" [(ngModel)]="title">
       <button (click)="title=''">CLEAR</button>
       <br/>
       <favourite [is-favourite]="post.isfavourite" (change)="onFavouriteChange($event)"></favourite>
       <butclick></butclick>
       <butclick></butclick>
       <authors></authors>
       <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
       <voter [voteCount]="post1.voteCount" [myVote]="post1.myVote" (vote)="onVote($event)"></voter>
       <viewmode></viewmode>
       <pipe></pipe> <br/>
       {{post2.title}}<br/>
       {{post2.body | summary : 10}}<br/>
       <bs-panel>
       <div class="heading">This is the Header</div>
       <div class="body">This is the body</div>
       <div class="body">This is Another body</div>
       </bs-panel>

    `,
    directives:[FavouriteComponent,CoursesComponent,AutoGrowDirective, 
                ButtonClickComponent, AuthorsComponent, LikeComponent, 
                VoterComponent, TweetsComponent, ViewModeComponent, PipeComponent,
                BootstrapPanel],
    pipes:[SummaryPipe]

    
})

export class AppComponent {
post = {

    title : "Titiel header",
    isfavourite : true
}
tweet ={
    totalLikes:10,
    iLike:false
}
onFavouriteChange($event){
    console.log($event.newValue);
}

post1={
    voteCount:10,
    myVote:0
}

onVote($event){
console.log($event)
}

post2={
    title:'Lorel ipsum sample',
    body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
}

 }