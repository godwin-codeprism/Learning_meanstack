"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var post_feed_component_1 = require('./post-feed.component');
var PostForm = (function () {
    function PostForm(formBuilder, http) {
        this.http = http;
        this.post = [];
        this.created_by = new forms_1.FormControl('', forms_1.Validators.required);
        this.text = new forms_1.FormControl('', forms_1.Validators.required);
        this.form = formBuilder.group({
            "created_by": this.created_by,
            "text": this.text,
            "created_at": Date.now()
        });
    }
    PostForm.prototype.onPost = function (data) {
        this.post.unshift(data);
        var body = JSON.stringify({ "name": "godwin" });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/message', body, options);
    };
    PostForm = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'post-form',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, post_feed_component_1.PostFeed],
            templateUrl: 'src/views/post-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http])
    ], PostForm);
    return PostForm;
}());
exports.PostForm = PostForm;
