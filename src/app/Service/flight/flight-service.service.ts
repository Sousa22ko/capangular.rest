import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCESS_KEY, API_URL } from 'src/app/Configs/apiConfig';
import { RootObject } from 'src/app/Model/Pagination';
import { LoggerService } from '../logger/logger-service.service';

const url = `${API_URL}flights?access_key=${ACCESS_KEY}`;

@Injectable()
export class FlightService {

  constructor(private log: LoggerService, private http: HttpClient) { }

  findFlightsByArrival(iata_code: string, operacao:string , status: string):Observable<RootObject>{
    this.log.log(`Consultando voos de ${iata_code} - ${status}`);
    let finalURL = `${url}&${operacao}=${iata_code}&limit=100&flight_status=${status}`;
    this.log.log(finalURL)
    return this.http.get<RootObject>(finalURL)
  }

}
