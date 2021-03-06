import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeroesModule } from './heroes/heroes.module';

import {
  HTTP_CONFIG,
  HttpConfig,
  HttpRestDecoratorModule
} from 'http-rest-decorator';
import { HeroWebApi } from './services/hero.webapi';

/**
 * default http service configuration settings
 */
export const DEFAULT_HTTP_CONFIG: HttpConfig = {
  Url: 'api.heroes.com',
  Headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'DataType': 'application/json'
  }
};

/**
 * main module application
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeroesModule,
    HttpRestDecoratorModule
  ],
  providers: [
    { provide: HTTP_CONFIG, useValue: DEFAULT_HTTP_CONFIG },
    HeroWebApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
