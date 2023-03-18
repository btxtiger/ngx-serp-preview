import { Component } from '@angular/core';
import { mdiThemeLightDark } from '@mdi/js';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   public darkToggleIcon = mdiThemeLightDark;
   public title = 'Introduction to the Angular docs';
   public siteName = 'Angular Framework';
   public url = 'https://angular.io/docs';
   public faviconUrl = 'https://angular.io/assets/images/favicons/favicon-144x144.png';
   public description =
      'These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page applications for enterprises. Tutorials and guides include downloadable examples to help you start your projects.';

   /**
    * Toggle Dark Mode
    */
   public toggleDarkMode(): void {
      if (document.body.classList.contains('dark')) {
         document.body.classList.remove('dark');
      } else {
         document.body.classList.add('dark');
      }
   }
}
