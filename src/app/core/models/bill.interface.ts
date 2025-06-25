export interface BillItem {
  id: string;
  company: string;
  type: string;
  amount: number;
  currency: string;
  dueDate: Date;
  dayOfMonth: number;
  month: string;
  logo?: string;
  color?: string;
  isOverdue?: boolean;
}

export interface UpcomingBillsData {
  bills: BillItem[];
  hasViewAll: boolean;
}