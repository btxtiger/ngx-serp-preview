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
import { NgIf } from '@angular/common';
import { NgxMdIconModule } from 'ngx-md-icon';
import { mdiDotsVertical, mdiEarth } from '@mdi/js';

@Component({
   selector: 'ngx-serp-google-mobile',
   standalone: true,
   imports: [NgIf, NgxMdIconModule],
   templateUrl: './ngx-serp-google-mobile.component.html',
   styleUrls: ['./ngx-serp-google-mobile.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
})
export class NgxSerpGoogleMobileComponent implements OnInit, OnChanges, OnDestroy {
   @HostBinding()
   public class = 'ngx-serp-google-mobile';

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

   public formattedUrl: string = '';
   public formattedDescription: string = '';
   public formattedTitle: string = '';

   public siteIcon = mdiEarth;
   public menuIcon = mdiDotsVertical;

   constructor(private cdRef: ChangeDetectorRef) {}

   ngOnInit(): void {}

   ngOnChanges(changes: SimpleChanges): void {
      if (changes['url']) {
         this.formattedUrl = this.formatUrl(this.url);
      }
      if (changes['description'] && this.description?.length) {
         this.formattedDescription = this.truncateString(this.description, 155);
      }
      if (changes['title'] && this.title?.length) {
         this.formattedTitle = this.truncateString(this.title, 82);
      }
   }

   ngOnDestroy(): void {}

   private formatUrl(url: string): string {
      return 'https://' + url.replace(/https?:\/\//, '').replace(/\//g, ' › ');
   }

   /**
    * Truncate String
    */
   private truncateString(inputStr: string, maxLength: number): string {
      const words = inputStr.split(' ');
      let str = '';
      for (let i = 0; i < words.length; i++) {
         const word = words[i];
         if (str.length + word.length > maxLength) {
            str += ' ...';
            break;
         } else {
            str += ' ' + word;
         }
      }
      str = str.trim();

      return str;
   }
}
