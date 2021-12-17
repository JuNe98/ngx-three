import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { CubeTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import {
    ThCallbackLoaderService,
    ThTextureLoaderBaseDirective, ThTextureLoaderBasePipe
} from './ThTextureLoaderBase';

@Injectable({
    providedIn: 'root'
  })
  export class CubeTextureLoaderService extends ThCallbackLoaderService<CubeTextureLoader> {
    public clazz = CubeTextureLoader;
  }

  @Pipe({
    name: 'loadCubeTexture',
    pure: true
  })
  export class ThCubeTextureLoaderPipe extends ThTextureLoaderBasePipe<CubeTextureLoader> implements PipeTransform {
    constructor(protected service: CubeTextureLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadCubeTexture]',
  })
  export class ThCubeTextureLoaderDirective extends ThTextureLoaderBaseDirective<CubeTextureLoader> {
    constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone, protected service: CubeTextureLoaderService) {
      super(host,zone);
    }
  }
