import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const ENABLED_CAR = 'ENABLED_CAR';
  export const DISABLED_CAR = 'DISABLED_CAR';
}

export class AddCar implements Action {
  readonly type = CAR_ACTION.ADD_CAR;

  constructor(public payload: Car) {
  }
}

export class DeleteCar implements Action {
  readonly type = CAR_ACTION.DELETE_CAR;

  constructor(public payload: Car) {
  }
}

export class EnabledCar implements Action {
  readonly type = CAR_ACTION.ENABLED_CAR;

  constructor(public payload: Car) {
    this.payload.disabled = false;
  }
}


export class DisabledCar implements Action {
  readonly type = CAR_ACTION.DISABLED_CAR;

  constructor(public payload: Car) {
    this.payload.enabled = false;
  }
}


export type CarsAction = AddCar | DeleteCar | EnabledCar | DisabledCar;


