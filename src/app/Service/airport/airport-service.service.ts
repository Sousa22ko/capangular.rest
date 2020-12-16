import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger-service.service';
import { HttpClient } from '@angular/common/http'
import { ACCESS_KEY, API_URL } from 'src/app/Configs/apiConfig';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/Model/Pagination';

const url = `${API_URL}airports?access_key=${ACCESS_KEY}`;

@Injectable()
export class AirportService {

  constructor(private log: LoggerService, private http: HttpClient) { }

  findAllByCountryName(nome: string):Observable<RootObject>{
    this.log.log("Consultando aeroportos do Brasil");
    let finalURL = `${url}&country_name=${nome}&limit=260`;
    this.log.log(finalURL)
    return this.http.get<RootObject>(finalURL)
  }
}
