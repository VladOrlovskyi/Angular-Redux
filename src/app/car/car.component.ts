import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {DeleteCar, DisabledCar, EnabledCar} from '../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  @Input() car: Car;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }

  enabled() {
    this.store.dispatch(new EnabledCar(this.car));


    /* if (this.car.enabled = true) {
       return this.car.disabled = false;
     }*/
  }

  disabled() {
    this.store.dispatch(new DisabledCar(this.car));

    /*if (this.car.disabled = true) {
      return this.car.enabled = false;
    }*/

  }


}
