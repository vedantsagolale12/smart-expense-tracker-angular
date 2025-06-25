import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { AppIcons } from './shared/constants/icon_mapping';
import { Theme } from './core/services/theme';
import { TotalBalanceCard } from "./shared/components/total-balance-card/total-balance-card";
import { GoalCard } from "./shared/components/goal-card/goal-card";
import { UpcomingbillCard } from "./shared/components/upcomingbill-card/upcomingbill-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Navbar, TotalBalanceCard, GoalCard, UpcomingbillCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'smart-expense-tracker-angular';
  appIcons = AppIcons;

  constructor(private themeService: Theme) {
    
    this.themeService.setTheme('light'); // or load from localStorage
  }
}
