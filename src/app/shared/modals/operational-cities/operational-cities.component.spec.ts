import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalCitiesComponent } from './operational-cities.component';

describe('OperationalCitiesComponent', () => {
  let component: OperationalCitiesComponent;
  let fixture: ComponentFixture<OperationalCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
