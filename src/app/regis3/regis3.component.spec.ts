import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regis3Component } from './regis3.component';

describe('Regis3Component', () => {
  let component: Regis3Component;
  let fixture: ComponentFixture<Regis3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regis3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
