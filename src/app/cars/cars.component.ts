import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = CARS;

  selectedCar?: Car;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  getCars(): void {
    this.carService.getCars()
  }
}
