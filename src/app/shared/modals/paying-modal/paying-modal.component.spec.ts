import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingModalComponent } from './paying-modal.component';

describe('PayingModalComponent', () => {
  let component: PayingModalComponent;
  let fixture: ComponentFixture<PayingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
