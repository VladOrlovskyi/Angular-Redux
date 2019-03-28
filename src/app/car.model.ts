export class Car {
  constructor(
    public name: string,
    public model: string,
    public enabled: boolean = true,
    public disabled: boolean = false,
    public id?: number
  ) {
  }
}

export interface Cars {
  cars: Car[];
}
