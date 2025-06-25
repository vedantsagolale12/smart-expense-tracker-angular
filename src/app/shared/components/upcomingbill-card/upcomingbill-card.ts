import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BillItem, UpcomingBillsData } from '../../../core/models/bill.interface';

@Component({
  selector: 'app-upcomingbill-card',
  imports: [CommonModule],
  templateUrl: './upcomingbill-card.html',
  styleUrl: './upcomingbill-card.css'
})
export class UpcomingbillCard {
@Input() title: string = 'Upcoming Bills';
  @Input() data!: UpcomingBillsData;
  
  trackByBillId(index: number, bill: BillItem): string {
    return bill.id;
  }
  
  getCompanyInitial(companyName: string): string {
    return companyName.charAt(0).toUpperCase();
  }
  
  onViewAll() {
    console.log('View all bills clicked');
  }
  
  onBillClick(bill: BillItem) {
    console.log('Bill clicked:', bill);
  }
}
