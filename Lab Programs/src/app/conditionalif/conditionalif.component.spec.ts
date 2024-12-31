import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalifComponent } from './conditionalif.component';

describe('ConditionalifComponent', () => {
  let component: ConditionalifComponent;
  let fixture: ComponentFixture<ConditionalifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionalifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
