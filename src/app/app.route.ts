import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ModuleWithProviders} from '@angular/core';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'drugs',
        loadChildren: './component/drug/drug.module#DrugModule',
        pathMatch: 'full'
    },
    {
        path: 'stocks',
        loadChildren: './component/stock/stock.module#StockModule',
        pathMatch: 'full'
    }];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);

