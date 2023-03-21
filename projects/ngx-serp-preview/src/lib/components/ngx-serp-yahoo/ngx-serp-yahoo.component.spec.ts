import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSerpYahooComponent } from './ngx-serp-yahoo.component';

describe('NgxSerpYahooComponent', () => {
   let component: NgxSerpYahooComponent;
   let fixture: ComponentFixture<NgxSerpYahooComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [NgxSerpYahooComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NgxSerpYahooComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
