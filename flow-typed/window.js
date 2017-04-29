declare type Window = {
  addEventListener: (type: string, listener: (evt: any) => void) => void,
  removeEventListener: (type: string, listener: (evt: any) => void) => void,
  requestAnimationFrame: Function
}

declare var window: Window

declare type DeviceOrientationEvent = {
  beta: number,
  gamma: number
}
