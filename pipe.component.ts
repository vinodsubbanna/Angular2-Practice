import {Component} from 'angular2/core'
@Component({
    selector:'pipe',
    template:`
        {{course.title | uppercase}}<br/>
        {{course.rating | number :'2.2-2'}} <br/>
        {{course.students | number }} <br/>
        {{course.price | currency : 'AUD' : true : '2.2-2'}} <br/>
        {{course.releaseDate | date : 'MMM yyyy'}} <br/>
        {{course | json}}
    `
})
export class PipeComponent{
course = {
    title : 'Angular 2 for Beginners',
    rating: 4.9756,
    students: 5934,
    price:99.95,
    releaseDate : new Date(2016, 3, 1)
}
}