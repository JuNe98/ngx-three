/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { LatheGeometry, Vector2 } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-latheGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThLatheGeometry) },
  ],
})
export class ThLatheGeometry<
  TARGS extends any[] = [
    points: Vector2[],
    segments?: number,
    phiStart?: number,
    phiLength?: number
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: LatheGeometry;
  protected getType(): Type<LatheGeometry> {
    return LatheGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    points: Vector2[];
    segments: number;
    phiStart: number;
    phiLength: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}