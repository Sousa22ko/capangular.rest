import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dtForm'
})
export class DtFormPipe implements PipeTransform {

  transform(date: Date): string {
    return "null";
  }

}
