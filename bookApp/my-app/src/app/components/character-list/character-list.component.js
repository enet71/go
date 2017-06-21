"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CharacterListComponent = (function () {
    function CharacterListComponent(characterService, router) {
        this.characterService = characterService;
        this.router = router;
        this.visibleList = [];
        this.start = 0;
        this.loadNum = 15;
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        this.listPush();
    };
    CharacterListComponent.prototype.loadMore = function () {
        this.listPush();
    };
    CharacterListComponent.prototype.listPush = function () {
        var _this = this;
        rxjs_1.Observable.from(this.characterList.slice(this.start, this.start + this.loadNum))
            .map(function (element) { return element.split('/').pop(); })
            .subscribe(function (element) { return _this.characterService.getCharacter(element).subscribe(function (response) { return _this.visibleList.push(response); }); });
        this.start += this.loadNum;
    };
    __decorate([
        core_1.Input()
    ], CharacterListComponent.prototype, "characterList", void 0);
    CharacterListComponent = __decorate([
        core_1.Component({
            selector: 'character-list',
            templateUrl: 'character-list.component.html',
            styleUrls: ['character-list.component.css']
        })
    ], CharacterListComponent);
    return CharacterListComponent;
}());
exports.CharacterListComponent = CharacterListComponent;
