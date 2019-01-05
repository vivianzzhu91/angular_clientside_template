import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regis2Component } from './regis2.component';

describe('Regis2Component', () => {
  let component: Regis2Component;
  let fixture: ComponentFixture<Regis2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regis2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
