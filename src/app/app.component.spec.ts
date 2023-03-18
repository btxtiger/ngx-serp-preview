import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxMdIconComponent, NgxMdIconModule } from "ngx-md-icon";
import { NgxSerpTabsComponent } from "ngx-serp-preview";

describe('AppComponent', () => {
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [RouterTestingModule, NgxSerpTabsComponent, NgxMdIconModule],
         declarations: [AppComponent],
      }).compileComponents();
   });

   it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
   });
});
