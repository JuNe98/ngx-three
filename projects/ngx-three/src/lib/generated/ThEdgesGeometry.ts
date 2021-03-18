/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BufferGeometry, EdgesGeometry, Geometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-edgesGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThEdgesGeometry) },
  ],
})
export class ThEdgesGeometry<
  TARGS extends any[] = [
    geometry: BufferGeometry | Geometry,
    thresholdAngle?: number
  ]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public obj!: EdgesGeometry;
  protected getType(): Type<EdgesGeometry> {
    return EdgesGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: { thresholdAngle: number }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}