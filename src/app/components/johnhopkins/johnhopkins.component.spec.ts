import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnhopkinsComponent } from './johnhopkins.component';

describe('JohnhopkinsComponent', () => {
  let component: JohnhopkinsComponent;
  let fixture: ComponentFixture<JohnhopkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnhopkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnhopkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
