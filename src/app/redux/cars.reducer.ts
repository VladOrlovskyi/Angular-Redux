import {Car} from '../car.model';
import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  cars: [
    new Car('Mercedes', 's-500', true, false, 1),
    new Car('Audi', 'A6', false, true, 2),
    new Car('Mazda', '6', true, false, 3),
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.ENABLED_CAR:
      const idx = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[idx].enabled = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    case CAR_ACTION.DISABLED_CAR:
      const idx1 = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[idx1].disabled = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
