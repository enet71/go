import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookComponent} from "./components/book/book.component";
import {AppRoutingModule} from "./app.routing.module";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {CharacterComponent} from "./components/character/character.component";
import {DataService} from "./shared/services/data.service";
import {HouseComponent} from "./components/house/house.component";
import {SearchComponent} from "./components/search/search.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {HouseListComponent} from "./components/house-list/house-list.component";

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookComponent,
        CharacterListComponent,
        CharacterComponent,
        HouseComponent,
        SearchComponent,
        SearchResultComponent,
        HouseListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
