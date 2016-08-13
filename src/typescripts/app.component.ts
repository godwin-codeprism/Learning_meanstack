import {Component} from '@angular/core';

import {PostForm} from './post-form.component';
import {List} from './table.component'

@Component({
    selector: 'g-app',
    templateUrl: 'src/views/app.component.html',
    directives: [PostForm,List]
})

export class AppComponent {
}
