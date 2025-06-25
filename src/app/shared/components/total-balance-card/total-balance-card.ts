import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalBalanceData } from '../../../core/models/total_balance.interface';

@Component({
  selector: 'app-total-balance-card',
  imports: [CommonModule],
  templateUrl: './total-balance-card.html',
  styleUrl: './total-balance-card.css'
})
export class TotalBalanceCard {
@Input() title: string = 'Total Balance';
  @Input() subtitle: string = 'All Accounts';
  @Input() data!: TotalBalanceData;
}
