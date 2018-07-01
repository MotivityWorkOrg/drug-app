import {RouterModule, Routes} from '@angular/router';
import {StockComponent} from './stock.component';
import {ModuleWithProviders} from '@angular/core';

const ROUTES: Routes = [
    {
        path: '',
        component: StockComponent
    }
];

export const STOCK_ROUTE: ModuleWithProviders = RouterModule.forChild(ROUTES);
