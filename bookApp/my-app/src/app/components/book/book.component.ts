import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import {covers} from "../../shared/book-covers";
import {Book} from "../../shared/interfaces/book";

@Component({
    selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
    book:Book;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.dataService.getBook((params['id'])).subscribe(response => {
                    this.book = response;
                    this.setCover();
                }
            )
        });
    }

    setCover() {
        let cover = covers.find((cover: any) => cover.bookUrl === this.book.url);
        this.book.bookCover = cover ? cover.coverUrl : covers[covers.length - 1].coverUrl;
    }
}