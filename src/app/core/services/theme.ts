import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private themeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.themeSubject.asObservable();

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

 setTheme(theme: 'light' | 'dark') {
  this.themeSubject.next(theme);
  if (typeof document !== 'undefined') {
    document.body.setAttribute('data-theme', theme);
  }
}

  get currentTheme(): 'light' | 'dark' {
    return this.themeSubject.value;
  }
}
