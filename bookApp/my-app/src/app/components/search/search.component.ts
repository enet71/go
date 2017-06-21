import {Component, ViewChild, ElementRef, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})

export class SearchComponent implements AfterViewInit{
    @ViewChild('search')
    private searchInput;

    constructor(private router: Router) {

    }

    onSearch(search) {
        this.router.navigate(['search-result', search]);
    }

    ngAfterViewInit() {
        Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
            .debounceTime(500)
            .subscribe((event:any) => {
                this.onSearch(event.target.value);
            });
    }
}