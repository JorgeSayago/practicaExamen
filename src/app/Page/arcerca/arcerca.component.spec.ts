import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcercaComponent } from './arcerca.component';

describe('ArcercaComponent', () => {
  let component: ArcercaComponent;
  let fixture: ComponentFixture<ArcercaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcercaComponent]
    });
    fixture = TestBed.createComponent(ArcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
