import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSerpBingComponent } from './ngx-serp-bing.component';

describe('NgxSerpBingComponent', () => {
   let component: NgxSerpBingComponent;
   let fixture: ComponentFixture<NgxSerpBingComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [NgxSerpBingComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NgxSerpBingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
