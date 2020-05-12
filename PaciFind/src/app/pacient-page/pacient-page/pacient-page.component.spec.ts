import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientPageComponent } from './pacient-page.component';

describe('PacientPageComponent', () => {
  let component: PacientPageComponent;
  let fixture: ComponentFixture<PacientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
