import {Component} from '@angular/core';
import {PostForm} from './post-form.component';

@Component({
    selector: 'g-app',
    templateUrl: 'src/views/app.component.html',
    directives: [PostForm]
})

export class AppComponent {
}
