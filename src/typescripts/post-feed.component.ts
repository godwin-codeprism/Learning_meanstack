import {Component, Input} from '@angular/core';

import {PostForm} from './post-form.component'

@Component ({
    selector:'post-feed',
    templateUrl:'src/views/post-feed.component.html'
})

export class PostFeed {
    @Input ('feedsToWatch') feeds
}
