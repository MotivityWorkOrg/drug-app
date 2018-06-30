import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrugComponent} from './drug.component';
import {DRUG_ROUTES} from './drug.route';

@NgModule({
    declarations: [
        DrugComponent
    ],
    imports: [
        CommonModule,
        DRUG_ROUTES
    ],
    declarations: [DrugComponent]
})
export class DrugModule {
}
