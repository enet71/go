import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import {StaticMethods} from "../../shared/static-methods";
import {Character} from "../../shared/interfaces/character";
import {House} from "../../shared/interfaces/house";

@Component({
    selector: 'house',
    templateUrl: 'house.component.html',
    styleUrls: ['house.component.css']
})

export class HouseComponent implements OnInit {
    house:House;
    branches:House[];
    currentLord:Character;
    heir:Character;
    overlord:Character;
    founder:Character;

    constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.dataService.getHouse((params['id'])).subscribe(response => {
                this.house = response;
                this.setParameters();
            });
        });
    }

    setParameters() {
        this.setBranches(this.house.cadetBranches);

        this.dataService.getCharacter(StaticMethods.getId(this.house.currentLord)).subscribe(res => this.currentLord = res);
        this.dataService.getCharacter(StaticMethods.getId(this.house.heir)).subscribe(res => this.heir = res);
        this.dataService.getHouse(StaticMethods.getId(this.house.overlord)).subscribe(res => this.overlord = res);
        this.dataService.getCharacter(StaticMethods.getId(this.house.founder)).subscribe(res => this.founder = res);
    }

    onRoute(page, item) {
        this.router.navigate([page, StaticMethods.getId(item.url)]);
    }

    setBranches(branches) {
        this.branches = [];
        for (let branch of branches) {
            this.dataService.getHouse(StaticMethods.getId(branch)).subscribe(res => this.branches.push(res));
        }
    }
}