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
import { mdiDotsVertical, mdiEarth, mdiMenuDown } from '@mdi/js';

@Component({
   selector: 'ngx-serp-bing',
   standalone: true,
   imports: [NgIf, NgxMdIconModule],
   templateUrl: './ngx-serp-bing.component.html',
   styleUrls: ['./ngx-serp-bing.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
})
export class NgxSerpBingComponent implements OnInit, OnChanges, OnDestroy {
   @HostBinding()
   public class = 'ngx-serp-bing';

   @Input()
   public title?: string;

   @Input()
   public description?: string;

   @Input()
   public url: string = 'example.com';

   public formattedUrl: string = '';
   public formattedDescription: string = '';
   public formattedTitle: string = '';

   public downIcon = mdiMenuDown;

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
      const match = url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/);
      return match ? match[0] + '…' : url;
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
