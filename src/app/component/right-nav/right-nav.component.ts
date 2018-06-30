import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-right-nav',
    templateUrl: './right-nav.component.html',
    styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {

    @Input()
    graphsData = [];

    @Input()
    pieChart = {};

    @Input()
    doughnutChart = {};

    @Input()
    barChart = {};
    constructor() {
    }

    ngOnInit() {
    }

}
