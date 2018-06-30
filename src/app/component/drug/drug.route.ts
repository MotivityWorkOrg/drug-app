import {RouterModule, Routes} from '@angular/router';
import {DrugComponent} from './drug.component';
import {ModuleWithProviders} from '@angular/core';

const ROUTE: Routes = [
    {
        path: '',
        component: DrugComponent
    }];

export const DRUG_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTE);

