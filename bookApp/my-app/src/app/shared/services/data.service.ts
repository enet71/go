import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class DataService {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:8187/';
    }

    getBooks() {
        return this.getData('books');
    }

    getBook(id) {
        return this.getDataId('books/', id);
    }

    getBookByName(name) {
        return this.getData(`books/?name=${name}`)
    }

    getCharacter(id) {
        return this.getDataId('characters/', id);
    }

    getCharactersSize(page, size) {
        return this.getData(`characters/?page=${page}&pageSize=${size}`);
    }

    getCharacterByName(name) {
        return this.getData(`characters/?name=${name}`);
    }

    getHouse(id) {
        return this.getDataId('houses/', id);
    }

    getHousesSize(page, size) {
        return this.getData(`houses/?page=${page}&pageSize=${size}`);
    }

    getHouseByName(name){
        return this.getData(`houses/?name=${name}`)
    }

    getDataId(request, id) {
        if (id) {
            return this.getData(request + id);
        } else {
            return Observable.from("");
        }
    }

    getData(request) {
        return this.http.get(this.baseUrl + request)
            .map(res => res.json());
    }
}