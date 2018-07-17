import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowcanComponent } from './howcan.component';

describe('HowcanComponent', () => {
  let component: HowcanComponent;
  let fixture: ComponentFixture<HowcanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowcanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
