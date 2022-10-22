import { Pipe, PipeTransform } from '@angular/core';
import { Guitar } from '../model/guitar';

@Pipe({
  name: 'filterGuitars'
})
export class FilterGuitarsPipe implements PipeTransform {

  transform(guitars: Guitar[], search: string): Guitar[] {
    return guitars.filter(m => m.brand.toLowerCase().includes(search.toLowerCase()));
  }

}