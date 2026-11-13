import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { interval, map } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, NumericDirective, KeyLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class AppComponent {
  title = signal('ch03-2026am');
  settings = inject(APP_SETTINGS);

  constructor() {
    interval(2000).pipe(
      map(() => {
        const timestamp = new Date();
        return `${this.settings.title} - ${timestamp.toLocaleTimeString()}`;
      })
    ).subscribe(newTitle => {
      this.title.set(newTitle);
    });
  }
}