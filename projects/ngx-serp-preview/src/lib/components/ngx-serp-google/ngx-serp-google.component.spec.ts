import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSerpGoogleComponent } from './ngx-serp-google.component';

describe('NgxSerpGoogleComponent', () => {
   let component: NgxSerpGoogleComponent;
   let fixture: ComponentFixture<NgxSerpGoogleComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [NgxSerpGoogleComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NgxSerpGoogleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
