import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'amountPipe' })
export class AmountPipe implements PipeTransform {

  transform( amount: string | number ): string {
    const formatter = new Intl.NumberFormat(  'es-CO', {
      currency: "COP",
      style: "currency",
    } );
    let result = formatter.format( Number( amount ) ).substring( 2 );
    result = result.substring( 0, result.length - 3 );
    return `$${result}`; 
  }
}
