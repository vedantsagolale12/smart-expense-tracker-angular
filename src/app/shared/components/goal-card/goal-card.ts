import { Component, Input } from '@angular/core';
import { GoalData } from '../../../core/models/goal_data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goal-card',
  imports: [CommonModule],
  templateUrl: './goal-card.html',
  styleUrl: './goal-card.css',
})
export class GoalCard {
  @Input() title: string = 'Goals';
  @Input() showViewAll: boolean = true;
  @Input() data!: GoalData;

  onViewAll() {
    // Emit event or handle view all logic
    console.log('View all goals clicked');
  }

  onEdit() {
    // Emit event or handle edit logic
    console.log('Edit goal clicked');
  }
}
