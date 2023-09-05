import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltnachNeuComponent } from './altnach-neu.component';

describe('AltnachNeuComponent', () => {
  let component: AltnachNeuComponent;
  let fixture: ComponentFixture<AltnachNeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltnachNeuComponent]
    });
    fixture = TestBed.createComponent(AltnachNeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
