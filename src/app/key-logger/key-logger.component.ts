import { Component, ElementRef, viewChild, input, afterNextRender, signal } from '@angular/core';
import { fromEvent, tap, map, filter } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent {
  input = viewChild.required<ElementRef>('KeyContainer');
  keys = signal('');
  numeric = input(false);

  constructor() {
    afterNextRender(() => {
      const logger$ = fromEvent<KeyboardEvent>(this.input().nativeElement, 'keyup');
      logger$.pipe(
        map(evt => evt.key.charCodeAt(0)),
        filter(code => {
          if (this.numeric()) {
            return code >= 48 && code <= 57;
          }
          return true;
        }),
        tap(digit => this.keys.update(k => k + String.fromCharCode(digit)))
      ).subscribe();
    });
  }
}