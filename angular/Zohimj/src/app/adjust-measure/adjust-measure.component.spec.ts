import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustMeasureComponent } from './adjust-measure.component';

describe('AdjustMeasureComponent', () => {
  let component: AdjustMeasureComponent;
  let fixture: ComponentFixture<AdjustMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjustMeasureComponent]
    });
    fixture = TestBed.createComponent(AdjustMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
