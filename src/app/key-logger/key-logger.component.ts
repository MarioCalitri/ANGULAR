import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-key-logger',
  styleUrl: './key-logger.component.css',
  templateUrl: './key-logger.component.html',
})
export class KeyLoggerComponent implements OnInit {

  input = viewChild<ElementRef>('keyContainer');

  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement, 'keyup');
    logger$.subscribe(evt => this.keys += evt.key);
    }
}
