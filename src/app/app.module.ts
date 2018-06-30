import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './global/header/header.component';
import {APP_ROUTES} from './app.route';
import {HomeComponent} from './component/home/home.component';
import {LeftNavComponent} from './component/left-nav/left-nav.component';
import {RightNavComponent} from './component/right-nav/right-nav.component';
import {ChartModule} from 'primeng/chart';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import { MiddleComponent } from './component/middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftNavComponent,
    RightNavComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,
    ChartModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
