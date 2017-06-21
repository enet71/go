import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import {Character} from "../../shared/interfaces/character";
import {StaticMethods} from "../../shared/static-methods";
import {Book} from "../../shared/interfaces/book";
import {House} from "../../shared/interfaces/house";

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharacterComponent implements OnInit {
    character:Character;
    books:Book[];
    povBooks:Book[];
    houses:House[];
    father:Character;
    mother:Character;
    spouse:Character;

    constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.dataService.getCharacter((params['id'])).subscribe(response => {
                this.character = response;
                this.setParameters();
            });
        });
    }

    setParameters() {
        this.setBooks(this.character.books);
        this.setPovBooks(this.character.povBooks);
        this.setHouses(this.character.allegiances);

        this.dataService.getCharacter(StaticMethods.getId(this.character.father)).subscribe(res => this.father = res);
        this.dataService.getCharacter(StaticMethods.getId(this.character.mother)).subscribe(res => this.mother = res);
        this.dataService.getCharacter(StaticMethods.getId(this.character.spouse)).subscribe(res => this.spouse = res);
    }

    setCharacter(url, result) {
        this.dataService.getCharacter(StaticMethods.getId(url)).subscribe(res => {
            result = res;
        })
    }

    setBooks(books) {
        this.books = [];
        for (let book of books) {
            this.dataService.getBook(StaticMethods.getId(book)).subscribe(res => this.books.push(res));
        }
    }

    setPovBooks(povBooks) {
        this.povBooks = [];
        for (let povBook of povBooks) {
            this.dataService.getBook(StaticMethods.getId(povBook)).subscribe(res => this.povBooks.push(res));
        }
    }

    setHouses(houses) {
        this.houses = [];
        for (let house of houses) {
            this.dataService.getHouse(StaticMethods.getId(house)).subscribe(res => this.houses.push(res));
        }
    }

    onRoute(page, item) {
        this.router.navigate([page, StaticMethods.getId(item.url)]);
    }
}