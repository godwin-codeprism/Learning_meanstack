import {Component, Output} from '@angular/core';
import {NgForm, FormBuilder, FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

import {PostFeed} from './post-feed.component'
@Component({
    selector: 'post-form',
    directives: [REACTIVE_FORM_DIRECTIVES,PostFeed],
    templateUrl: 'src/views/post-form.component.html'
})

export class PostForm {
    post = [];
    form: FormGroup;
    created_by = new FormControl('', Validators.required);
    text = new FormControl('', Validators.required);

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            "created_by": this.created_by,
            "text": this.text,
            "created_at": Date.now()
        })
    }
    onPost(data){
        this.post.unshift(data);
        console.log(this.post);
    }
}
