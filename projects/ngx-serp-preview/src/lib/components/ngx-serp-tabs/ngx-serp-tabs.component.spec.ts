import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSerpTabsComponent } from './ngx-serp-tabs.component';

describe('NgxSerpTabsComponent', () => {
   let component: NgxSerpTabsComponent;
   let fixture: ComponentFixture<NgxSerpTabsComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [NgxSerpTabsComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NgxSerpTabsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
