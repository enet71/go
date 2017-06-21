import {Component, OnInit} from "@angular/core";
import {Character} from "../../shared/interfaces/character";
import {House} from "../../shared/interfaces/house";
import {Book} from "../../shared/interfaces/book";
import {DataService} from "../../shared/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StaticMethods} from "../../shared/static-methods";

@Component({
    selector: 'search-result',
    templateUrl: 'search-result.component.html',
    styleUrls: ['search-result.component.css']
})

export class SearchResultComponent implements OnInit {
    characterList: Character[] = [];
    houseList: House[] = [];
    bookList: Book[] = [];

    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => this.dataService.getCharacterByName(params['search']).subscribe(res => this.characterList.push(...res)));
        this.route.params.subscribe(params => this.dataService.getHouseByName(params['search']).subscribe(res => this.houseList.push(...res)));
        this.route.params.subscribe(params => this.dataService.getBookByName(params['search']).subscribe(res => this.bookList.push(...res)));
    }

    onRoute(page, item) {
        this.router.navigate([page, StaticMethods.getId(item.url)]);
    }
}