import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRoutingModule, routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from './feature/feature.module';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes), provideClientHydration(), HttpClientModule,    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FeatureModule],
};
