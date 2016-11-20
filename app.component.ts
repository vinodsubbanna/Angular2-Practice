import {Component} from 'angular2/core'
import {PostService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {OnInit, OnDestroy} from 'angular2/core'


@Component({
    selector: 'my-app',
    template: `
            `,
    providers:[PostService, HTTP_PROVIDERS],
    
}) 

export class AppComponent implements OnInit, OnDestroy{
     constructor(private _postService:PostService){
        
    }

    ngOnInit(){
        this._postService.getPosts()
        .subscribe(posts => console.log(posts[0].body));
    }

    ngOnDestroy(){

    }
 }