import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public rightGraphData: any;
    public pieChartData: any;
    public doughnutChartData: any;
    public barChartData: any;
    constructor() {
    }

    ngOnInit() {
        this.rightGraphData = [
            {

                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        label: 'Google',
                        data: [65, 59, 80, 81]
                    }
                ]
            },
            {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        label: 'Apple',
                        data: [65, 59, 80, 81]
                    }
                ]
            },
            {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        label: 'Amazon',
                        data: [65, 59, 80, 81]
                    }
                ]
            }
        ];

        this.pieChartData = {
            labels: ['Google', 'Amazon', 'Apple'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        this.doughnutChartData = {
            labels: ['Google', 'Amazon', 'Apple'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        this.barChartData = {
            labels: ['April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Amazon',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [81, 56, 55, 40]
                },
                {
                    label: 'Apple',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [19, 86, 27, 90]
                },
                {
                    label: 'Google',
                    backgroundColor: '#ffa3c7',
                    borderColor: '#FF6384',
                    data: [19, 86, 27, 90]
                }
            ]
        };
    }

}
