import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    return cars;
  }
}
