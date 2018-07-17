import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutheartComponent } from './aboutheart.component';

describe('AboutheartComponent', () => {
  let component: AboutheartComponent;
  let fixture: ComponentFixture<AboutheartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutheartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
