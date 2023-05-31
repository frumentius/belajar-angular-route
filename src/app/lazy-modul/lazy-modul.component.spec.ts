import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModulComponent } from './lazy-modul.component';

describe('LazyModulComponent', () => {
  let component: LazyModulComponent;
  let fixture: ComponentFixture<LazyModulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyModulComponent]
    });
    fixture = TestBed.createComponent(LazyModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
