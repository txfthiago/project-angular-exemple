import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityInfoCardComponent } from './security-info-card.component';

describe('SecurityInfoCardComponent', () => {
  let component: SecurityInfoCardComponent;
  let fixture: ComponentFixture<SecurityInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
