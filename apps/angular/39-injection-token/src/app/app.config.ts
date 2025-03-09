import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DEFAULT_TIMER } from './data';

export const TIMER_DURATION = new InjectionToken<number>('timer_duration');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'video' },
      { path: 'video', loadComponent: () => import('./video.component') },
      { path: 'phone', loadComponent: () => import('./phone.component') },
    ]),
    {
      provide: TIMER_DURATION,
      useValue: DEFAULT_TIMER,
    },
  ],
};
