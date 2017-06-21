import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {covers} from "../../shared/book-covers";
import {DataService} from "../../shared/services/data.service";
import {StaticMethods} from "../../shared/static-methods";
import {Book} from "../../shared/interfaces/book";

@Component({
    selector: 'book-list',
    templateUrl: 'book-list.component.html',
    styleUrls: ['book-list.component.css']
})

export class BookListComponent implements OnInit {
    bookList:Book[] = [];

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit(): void {
        this.dataService.getBooks().subscribe(response => {
            this.bookList = response;
            this.setCover();
        });
    }

    onOpen(item) {
        this.router.navigate(['book', StaticMethods.getId(item.url)]);
    }

    setCover() {
        this.bookList = this.bookList.map(element => {
            let book = covers.find((cover: any) => cover.bookUrl === element.url);
            element.bookCover = book ? book.coverUrl : covers[covers.length - 1].coverUrl;
            return element;
        });
    }
}