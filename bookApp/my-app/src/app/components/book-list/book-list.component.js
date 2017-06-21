"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BookListComponent = (function () {
    function BookListComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.bookList = [];
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (response) {
            console.log(response);
            _this.bookList = response;
        });
    };
    BookListComponent.prototype.onOpen = function (item) {
        this.router.navigate(['book', item.url.split('/').pop()]);
    };
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'book-list',
            templateUrl: 'book-list.component.html',
            styleUrls: ['book-list.component.css']
        })
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
