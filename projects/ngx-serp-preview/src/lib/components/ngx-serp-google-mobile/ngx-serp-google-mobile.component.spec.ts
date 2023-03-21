import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSerpGoogleMobileComponent } from './ngx-serp-google-mobile.component';

describe('NgxSerpGoogleMobileComponent', () => {
   let component: NgxSerpGoogleMobileComponent;
   let fixture: ComponentFixture<NgxSerpGoogleMobileComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [NgxSerpGoogleMobileComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NgxSerpGoogleMobileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
