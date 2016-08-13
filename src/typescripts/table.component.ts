import {Component, Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

interface Data {
    name: string,
    shortname: string,
    bio: string,
}
@Component({
    selector: 'g-list',
    templateUrl: 'src/views/table.component.html'
})
@Injectable()
export class List implements OnInit {
    public lists: Data[];
    query: string = '';
    constructor(private http: Http) { };
    ngOnInit() {
        this.getData().subscribe(data => {
            this.lists = data;
        })
    };
    getData(): Observable<Data[]> {
        return this.http.get('./src/data/data.json').map(res => {
            return res.json();
        });
    };
    onSearch(val: string) {
        this.getData().subscribe(data => {
            this.lists = data.filter(function (item, index, array) {
                if (item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    };
}