import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
