import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppRoutingModule,
  ControlsExamplePageComponent,
  DynamicLoaderExamplePageComponent,
  EventsExamplePageComponent,
  EXAMPLE_ROUTES,
  InstancedMeshExamplePageComponent,
  LoaderExamplePageComponent,
  SimpleExamplePageComponent
} from './app-routing.module';
import { AppComponent } from './app.component';
import { Box, SimpleExampleComponent } from './simple-example/simple-example.component';
import { NgxThreeModule } from 'projects/ngx-three/src/public-api';
import { LoaderExampleComponent } from './loader-example/loader-example.component';
import { ControlsExampleComponent } from './controls-example/controls-example.component';
import { EventsExampleComponent } from './events-example/events-example.component';
import { CodeComponent } from './code/code.component';
import { MaterialModule } from './material/material.module';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicLoaderExampleComponent } from './dynamic-loader-example/dynamic-loader-example.component';
import { InstancedMeshExampleComponent } from './instanced-mesh-example/instanced-mesh-example.component';
import { NavigationShellComponent } from './navigation-shell/navigation-shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    SimpleExampleComponent,
    Box,
    LoaderExampleComponent,
    ControlsExampleComponent,
    EventsExampleComponent,
    CodeComponent,
    DynamicLoaderExampleComponent,
    InstancedMeshExampleComponent,
    NavigationShellComponent,
    //
    SimpleExamplePageComponent,
    ControlsExamplePageComponent,
    LoaderExamplePageComponent,
    DynamicLoaderExamplePageComponent,
    EventsExamplePageComponent,
    InstancedMeshExamplePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThreeModule,
    MaterialModule,
    //  HighlightModule,
    HighlightPlusModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}