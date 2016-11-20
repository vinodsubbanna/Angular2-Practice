import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
import {FavouriteComponent} from './favourite.component'

@Component({
    selector:'authors',
    template : `
        <h2>Authors</h2>
        <ul></ul>
        <li *ngFor="#author of authors">
            {{author}} <favourite></favourite>
        </li>,
    `,
    providers:[AuthorService],
    directives:[FavouriteComponent]
})
export class AuthorsComponent{
authors;
constructor(authorService :AuthorService ){
    this.authors = authorService.getAuthors();
}
}