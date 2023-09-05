import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReperaturComponent } from './reperatur.component';

describe('ReperaturComponent', () => {
  let component: ReperaturComponent;
  let fixture: ComponentFixture<ReperaturComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReperaturComponent]
    });
    fixture = TestBed.createComponent(ReperaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
