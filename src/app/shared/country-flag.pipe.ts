import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../data/country';

@Pipe({
  name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform {

  transform(document: unknown, ...args: unknown[]): unknown {
    return (document as Country).flags.png;
  }

}
