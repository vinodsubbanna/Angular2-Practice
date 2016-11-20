import {Component} from 'angular2/core'
import {ZippyComponent} from './zippy.component'
import {ContactFormComponent} from './contact-form.component'
import {SubscriptionFormComponent} from './subscription-form.component'


@Component({
    selector: 'my-app',
    template: `
        <zippy title="who can see my stuff">
            Content of who can see my stuff
        </zippy>
        <zippy title="who can contact me">
            Content of who can contact me
        </zippy>
        <subscription-form></subscription-form>
    `,
    directives:[ZippyComponent, ContactFormComponent, SubscriptionFormComponent],
    
})

export class AppComponent {

 }