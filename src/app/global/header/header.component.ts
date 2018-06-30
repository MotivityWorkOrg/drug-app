import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public inputSearch: string;
    public drugSearch: string;
    public results: string[];

    constructor() {
    }

    ngOnInit() {
    }

    search(event) {

    }

}
