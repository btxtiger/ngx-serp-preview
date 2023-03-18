import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSerpGoogleComponent } from '../../projects/ngx-serp-preview/src/lib/components/ngx-serp-google/ngx-serp-google.component';
import { NgxSerpBingComponent } from '../../projects/ngx-serp-preview/src/lib/components/ngx-serp-bing/ngx-serp-bing.component';
import { NgxSerpYahooComponent } from '../../projects/ngx-serp-preview/src/lib/components/ngx-serp-yahoo/ngx-serp-yahoo.component';
import { NgxSerpGoogleMobileComponent } from '../../projects/ngx-serp-preview/src/lib/components/ngx-serp-google-mobile/ngx-serp-google-mobile.component';
import { NgxSerpTabsComponent } from '../../projects/ngx-serp-preview/src/lib/components/ngx-serp-tabs/ngx-serp-tabs.component';
import { NgxMdIconModule } from 'ngx-md-icon';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgxSerpGoogleComponent,
      NgxSerpBingComponent,
      NgxSerpYahooComponent,
      NgxSerpGoogleMobileComponent,
      NgxSerpTabsComponent,
      NgxMdIconModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
