import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PrettyJsonModule} from 'angular2-prettyjson';

import { AppComponent } from './app.component';

import { } from './ejercicio/example.model';

@NgModule({
  imports:      [ 
    BrowserModule,
    PrettyJsonModule
  ],
  declarations: [ AppComponent ],
  providers: [
    // Añadir provider
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
