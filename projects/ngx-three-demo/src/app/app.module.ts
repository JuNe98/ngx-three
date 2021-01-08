import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  Box,
  SimpleExampleComponent,
} from './simple-example/simple-example.component';
import { NgxThreeModule } from 'projects/ngx-three/src/public-api';
import { LoaderExampleComponent } from './loader-example/loader-example.component';

@NgModule({
  declarations: [AppComponent, SimpleExampleComponent, Box, LoaderExampleComponent],
  imports: [BrowserModule, AppRoutingModule, NgxThreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}