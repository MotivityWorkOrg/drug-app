import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {STOCK_ROUTE} from './stock.route';

@NgModule({
    imports: [
        CommonModule,
        STOCK_ROUTE
    ],
    declarations: [StockComponent]
})
export class StockModule {
}
