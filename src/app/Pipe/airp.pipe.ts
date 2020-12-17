import { Pipe, PipeTransform } from '@angular/core';
import { Airport } from '../Model/Airport';

@Pipe({
  name: 'airp'
})
export class AirpPipe implements PipeTransform {

  transform(airport: Airport): string {
    return `${airport.airport_name} (${airport.iata_code}) - GMT ${this.gmt(parseInt(airport.gmt))}` 
  }

  gmt(input: number):string{
    return input > 0 ? `+${input}` : `${input}`
  }

}
