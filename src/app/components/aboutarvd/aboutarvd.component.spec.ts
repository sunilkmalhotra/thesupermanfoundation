import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutarvdComponent } from './aboutarvd.component';

describe('AboutarvdComponent', () => {
  let component: AboutarvdComponent;
  let fixture: ComponentFixture<AboutarvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutarvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutarvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
