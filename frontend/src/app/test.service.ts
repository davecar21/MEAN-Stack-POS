import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

    constructor( private http: HttpClient) {
        this.getTest();
    }

    private apiUrl = 'http://localhost:3000/Items';

    getTest() {
        return this.http.get<Data[]>(this.apiUrl);
    }
}

interface Data {
    itemName: string;
    itemPrice: string;
    itemDescription: string;
}
