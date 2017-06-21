import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookComponent} from "./components/book/book.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {CharacterComponent} from "./components/character/character.component";
import {HouseComponent} from "./components/house/house.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {HouseListComponent} from "./components/house-list/house-list.component";

const routes: Routes = [
    {path: '', redirectTo: '/bookList', pathMatch: 'full'},
    {path: 'bookList', component: BookListComponent},
    {path: 'book/:id', component: BookComponent},
    {path: 'character/:id', component: CharacterComponent},
    {path: 'house/:id', component: HouseComponent},
    {path: 'search-result/:search', component: SearchResultComponent},
    {path: 'character-list', component: CharacterListComponent},
    {path: 'houses-list', component: HouseListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}