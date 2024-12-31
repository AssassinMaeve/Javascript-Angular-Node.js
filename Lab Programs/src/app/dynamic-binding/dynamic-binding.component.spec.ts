import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBindingComponent } from './dynamic-binding.component';

describe('DynamicBindingComponent', () => {
  let component: DynamicBindingComponent;
  let fixture: ComponentFixture<DynamicBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
