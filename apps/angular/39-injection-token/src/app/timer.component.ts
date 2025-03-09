import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { TIMER_DURATION } from './app.config';

@Component({
  selector: 'timer',
  standalone: true,
  template: `
    Timer running {{ timer() }}
  `,
})
export class TimerComponent {
  private readonly duration = inject(TIMER_DURATION);
  protected readonly timer = toSignal(interval(this.duration));
}
