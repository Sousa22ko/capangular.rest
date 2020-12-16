import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlightService } from './Service/flight/flight-service.service';
import { AirportService } from './Service/airport/airport-service.service';
import { LoggerService } from './Service/logger/logger-service.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FlightService, AirportService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
