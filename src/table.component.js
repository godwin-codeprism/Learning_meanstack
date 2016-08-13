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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var List = (function () {
    function List(http) {
        this.http = http;
        this.query = '';
    }
    ;
    List.prototype.ngOnInit = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            _this.lists = data;
        });
    };
    ;
    List.prototype.getData = function () {
        return this.http.get('./src/data/data.json').map(function (res) {
            return res.json();
        });
    };
    ;
    List.prototype.onSearch = function (val) {
        var _this = this;
        this.getData().subscribe(function (data) {
            _this.lists = data.filter(function (item, index, array) {
                if (item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    };
    ;
    List = __decorate([
        core_1.Component({
            selector: 'g-list',
            templateUrl: 'src/views/table.component.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], List);
    return List;
}());
exports.List = List;
