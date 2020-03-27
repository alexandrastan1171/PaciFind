import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileContainerComponent } from './doctor-profile-container.component';

describe('DoctorProfileContainerComponent', () => {
  let component: DoctorProfileContainerComponent;
  let fixture: ComponentFixture<DoctorProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfileContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
