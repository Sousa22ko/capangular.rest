import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(input: string){
    console.log(input);
  }
}
