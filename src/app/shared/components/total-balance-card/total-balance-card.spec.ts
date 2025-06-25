import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBalanceCard } from './total-balance-card';

describe('TotalBalanceCard', () => {
  let component: TotalBalanceCard;
  let fixture: ComponentFixture<TotalBalanceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalBalanceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalBalanceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
