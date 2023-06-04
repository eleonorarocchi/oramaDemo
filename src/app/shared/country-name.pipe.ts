import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../data/country';

@Pipe({
  name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {

  transform(document: unknown, ...args: unknown[]): unknown {
    return (document as Country).name.common
  }
}
