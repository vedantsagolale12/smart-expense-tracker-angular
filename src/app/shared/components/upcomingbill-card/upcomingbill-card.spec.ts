import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingbillCard } from './upcomingbill-card';

describe('UpcomingbillCard', () => {
  let component: UpcomingbillCard;
  let fixture: ComponentFixture<UpcomingbillCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingbillCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingbillCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
