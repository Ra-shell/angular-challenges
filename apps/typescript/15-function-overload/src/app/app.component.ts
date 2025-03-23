import { Component } from '@angular/core';
import { createVehicle } from './vehicle.utils';

@Component({
  standalone: true,
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
  car = createVehicle('car', 'diesel');
  moto = createVehicle('moto', 'diesel');
  bus = createVehicle('bus', 20, true); //Unclear this could have been boat, as it was errored
  boat = createVehicle('boat', 300); //Unclear this could have been the bus, as it was erroed
  bicycle = createVehicle('bicycle');
}
