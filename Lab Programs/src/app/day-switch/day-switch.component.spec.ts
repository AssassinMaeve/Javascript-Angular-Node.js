import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySwitchComponent } from './day-switch.component';

describe('DaySwitchComponent', () => {
  let component: DaySwitchComponent;
  let fixture: ComponentFixture<DaySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaySwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
