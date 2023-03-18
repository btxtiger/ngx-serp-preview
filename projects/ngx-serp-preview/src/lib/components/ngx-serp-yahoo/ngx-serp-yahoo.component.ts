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
import { NgxMdIconModule } from 'ngx-md-icon';
import { mdiChevronDown, mdiMenuDown } from '@mdi/js';

@Component({
   selector: 'ngx-serp-yahoo',
   standalone: true,
   imports: [NgxMdIconModule],
   templateUrl: './ngx-serp-yahoo.component.html',
   styleUrls: ['./ngx-serp-yahoo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
})
export class NgxSerpYahooComponent implements OnInit, OnChanges, OnDestroy {
   @HostBinding()
   public class = 'ngx-serp-yahoo';

   @Input()
   public title?: string;

   @Input()
   public description?: string;

   @Input()
   public url: string = 'example.com';

   public formattedUrl: string = '';
   public formattedDescription: string = '';
   public formattedTitle: string = '';

   public downIcon = mdiChevronDown;

   constructor(private cdRef: ChangeDetectorRef) {}

   ngOnInit(): void {}

   ngOnChanges(changes: SimpleChanges): void {
      if (changes['url']) {
         this.formattedUrl = this.formatUrl(this.url);
      }
      if (changes['description'] && this.description?.length) {
         this.formattedDescription = this.truncateString(this.description, 176);
      }
      if (changes['title'] && this.title?.length) {
         this.formattedTitle = this.truncateString(this.title, 60);
      }
   }

   ngOnDestroy(): void {}

   private formatUrl(url: string): string {
      url = url.replace(/https?:\/\//, '');
      const match = url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/);
      return match ? match[0] : url;
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
            str += '…';
            break;
         } else {
            str += ' ' + word;
         }
      }
      str = str.trim();

      return str;
   }
}
