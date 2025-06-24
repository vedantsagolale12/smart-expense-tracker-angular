import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Theme } from '../../../core/services/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styleUrl: './sidebar.css',
  standalone: true,
})
export class Sidebar implements OnInit, OnDestroy {
  isOpen = true;
  private themeSubscription?: Subscription;
  private isBrowser: boolean;
  

  navigationItems = [
    { label: 'Overview', icon: 'fas fa-th-large', route: '/overview' },
    { label: 'Balances', icon: 'fas fa-wallet', route: '/balances' },
    { label: 'Transactions', icon: 'fas fa-exchange-alt', route: '/transactions' },
    { label: 'Bills', icon: 'fas fa-file-invoice', route: '/bills' },
    { label: 'Expenses', icon: 'fas fa-credit-card', route: '/expenses' },
    { label: 'Goals', icon: 'fas fa-bullseye', route: '/goals' },
    { label: 'Settings', icon: 'fas fa-cog', route: '/settings' },
  ];

  constructor(
    private themeService: Theme,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }

    if (this.isBrowser) {
      window.removeEventListener('resize', this.checkScreenSize.bind(this));
    }
  }

  private checkScreenSize() {
    if (this.isBrowser) {
      this.isOpen = window.innerWidth > 768;
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.themeService.currentTheme;
  }

  onLogout() {
    console.log('Logout clicked');
    // this.authService.logout();
  }
}
