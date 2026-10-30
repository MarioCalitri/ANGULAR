import { TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { apply } from '@angular/forms/signals';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});