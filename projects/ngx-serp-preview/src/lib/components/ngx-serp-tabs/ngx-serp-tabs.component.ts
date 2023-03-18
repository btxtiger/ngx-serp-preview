import {
   ChangeDetectionStrategy,
   Component,
   OnInit,
   OnDestroy,
   ChangeDetectorRef,
   OnChanges,
   SimpleChanges,
   ViewEncapsulation,
   HostBinding,
   Input,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { NgxSerpGoogleComponent } from '../ngx-serp-google/ngx-serp-google.component';
import { NgxSerpGoogleMobileComponent } from '../ngx-serp-google-mobile/ngx-serp-google-mobile.component';
import { NgxSerpBingComponent } from '../ngx-serp-bing/ngx-serp-bing.component';
import { NgxSerpYahooComponent } from '../ngx-serp-yahoo/ngx-serp-yahoo.component';
import { mdiCellphone, mdiGoogle, mdiMicrosoftBing, mdiPhone, mdiYahoo } from '@mdi/js';
import { NgxMdIconModule } from 'ngx-md-icon';

@Component({
   selector: 'ngx-serp-tabs',
   standalone: true,
   imports: [
      NgSwitchCase,
      NgxSerpGoogleComponent,
      NgSwitch,
      NgxSerpGoogleMobileComponent,
      NgxSerpBingComponent,
      NgxSerpYahooComponent,
      NgxMdIconModule,
   ],
   templateUrl: './ngx-serp-tabs.component.html',
   styleUrls: ['./ngx-serp-tabs.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
})
export class NgxSerpTabsComponent implements OnInit, OnChanges, OnDestroy {
   @HostBinding()
   public class = 'ngx-serp-tabs';

   @Input()
   public siteName?: string;

   @Input()
   public title?: string;

   @Input()
   public description?: string;

   @Input()
   public url: string = 'example.com';

   @Input()
   public faviconUrl?: string;

   @Input()
   public activeTabIndex = 0;

   public icons = {
      google: mdiGoogle,
      mobile: mdiCellphone,
      bing: mdiMicrosoftBing,
      yahoo: mdiYahoo,
   };

   constructor(private cdRef: ChangeDetectorRef) {}

   ngOnInit(): void {}

   ngOnChanges(changes: SimpleChanges): void {}

   ngOnDestroy(): void {}
}
