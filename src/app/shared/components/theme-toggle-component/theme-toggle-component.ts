import { Component } from '@angular/core';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle-component.html',
  styleUrl: './theme-toggle-component.css',
  standalone : true
})
export class ThemeToggleComponent {
  constructor(private themeService: Theme) {}

  get isDark(): boolean {
    return this.themeService.currentTheme === 'dark';
  }

  onToggle() {
    this.themeService.toggleTheme();
  }
}
