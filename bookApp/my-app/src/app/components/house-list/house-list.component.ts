import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import {House} from "../../shared/interfaces/house";

@Component({
    selector: 'house-list',
    templateUrl: 'house-list.component.html',
    styleUrls: ['house-list.component.css']
})

export class HouseListComponent implements OnInit{
    houseList:House[] = [];
    start: number = 0;
    loadNum: number = 15;

    constructor(private dataService: DataService, private router: Router) {

    }

    ngOnInit(): void {
        this.listPush();
    }

    loadMore() {
        this.listPush();
    }

    onOpen(house) {
        this.router.navigate(['house', house.url.split('/').pop()]);
    }

    listPush() {
        this.start++;
        this.dataService.getHousesSize(this.start, this.loadNum).subscribe(response => this.houseList.push(...response));
    }
}