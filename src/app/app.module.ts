import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlightService } from './Service/flight/flight-service.service';
import { AirportService } from './Service/airport/airport-service.service';
import { LoggerService } from './Service/logger/logger-service.service';
import { AirpPipe } from './Pipe/airp.pipe';
import { DurPipe } from './Pipe/dur.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AirpPipe,
    DurPipe
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
