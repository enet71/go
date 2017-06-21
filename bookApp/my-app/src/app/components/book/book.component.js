"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BookComponent = (function () {
    function BookComponent(route, bookService) {
        this.route = route;
        this.bookService = bookService;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = 1;
        this.route.params.subscribe(function (params) { return id = (params['id']); });
        this.bookService.getBook(id).subscribe(function (response) {
            console.log(response);
            _this.book = response;
        });
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book',
            templateUrl: 'book.component.html',
            styleUrls: ['book.component.css']
        })
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
