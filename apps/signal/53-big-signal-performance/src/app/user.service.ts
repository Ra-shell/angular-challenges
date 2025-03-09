import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStore {
  user = signal({
    name: 'Bob',
    address: {
      street: '',
      zipCode: '',
      city: '',
    },
    note: '',
    title: '',
    salary: 0,
  });

  public readonly userName = computed(() => this.user().name);
  public readonly userAddress = computed(() => this.user().address, {
    equal: (a, b) => {
      return (
        (a === undefined && b === undefined) ||
        (a === null && b === null) ||
        (a.city === b.city && a.street === b.street && a.zipCode === b.zipCode)
      );
    },
  });
  public readonly userNote = computed(() => this.user().note);
  public readonly usertitle = computed(() => this.user().title);
  public readonly userSalary = computed(() => this.user().salary);
}
