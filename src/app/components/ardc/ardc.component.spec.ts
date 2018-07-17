import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdcComponent } from './ardc.component';

describe('ArdcComponent', () => {
  let component: ArdcComponent;
  let fixture: ComponentFixture<ArdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
