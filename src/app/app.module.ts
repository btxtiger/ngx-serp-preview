import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSerpTabsComponent } from '../../projects/ngx-serp-preview/src/lib/components/ngx-serp-tabs/ngx-serp-tabs.component';
import { NgxMdIconModule } from 'ngx-md-icon';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, NgxSerpTabsComponent, NgxMdIconModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
