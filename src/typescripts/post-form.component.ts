import {Component, Output, Injectable} from '@angular/core';
import {NgForm, FormBuilder, FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {PostFeed} from './post-feed.component'
@Injectable()
@Component({
    selector: 'post-form',
    directives: [REACTIVE_FORM_DIRECTIVES, PostFeed],
    templateUrl: 'src/views/post-form.component.html'
})

export class PostForm {
    post = [];
    form: FormGroup;
    created_by = new FormControl('', Validators.required);
    text = new FormControl('', Validators.required);

    constructor(formBuilder: FormBuilder, private http: Http) {
        this.form = formBuilder.group({
            "created_by": this.created_by,
            "text": this.text,
            "created_at": Date.now()
        });
    }
    onPost(data) {
        this.post.unshift(data);
        let body = JSON.stringify({ "name": "godwin" });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/message',body,options);
    }
}
