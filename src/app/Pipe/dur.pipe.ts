import { Pipe, PipeTransform } from '@angular/core';
import { FlightData } from '../Model/Flights';

@Pipe({
  name: 'dur'
})
export class DurPipe implements PipeTransform {

  transform(flight: FlightData): string {
    let diffMs = Math.ceil(new Date(flight.arrival.estimated).getTime() - new Date(flight.departure.estimated).getTime());

    let horas = Math.trunc(diffMs/3600000);
    let min = (diffMs%3600000)/60000;

    return `${horas}h e ${min} minutos`;
  }

}
