import {Component, Input, OnInit, SimpleChanges, OnChanges} from "@angular/core";
import {Observable} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import {StaticMethods} from "../../shared/static-methods";
import {Character} from "../../shared/interfaces/character";

@Component({
    selector: 'character-list',
    templateUrl: 'character-list.component.html',
    styleUrls: ['character-list.component.css']
})

export class CharacterListComponent implements OnInit,OnChanges {
    @Input() characterList: string;
    @Input() loadNum: number = 15;
    visibleList: Character[] = [];
    start: number = 0;

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.start = 0;
        this.visibleList = [];
        this.listPush();
    }

    ngOnInit(): void {
        if (!this.characterList) {
            this.listPush();
        }
    }

    loadMore() {
        this.listPush();
    }

    onOpen(character) {
        this.router.navigate(['character', character.url.split('/').pop()]);
    }

    listPush() {
        if (this.characterList) {
            Observable.from(this.characterList.slice(this.start, this.start + this.loadNum))
                .map((element: string) => StaticMethods.getId(element))
                .subscribe(element => this.dataService.getCharacter(element)
                    .subscribe(response => this.visibleList.push(response))
                );
            this.start += this.loadNum;
        } else {
            this.start++;
            this.dataService.getCharactersSize(this.start, this.loadNum).subscribe(response => this.visibleList.push(...response));
        }
    }
}