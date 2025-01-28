import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    
    //Validação para saber se a rua está valida 
    if(!address || !address.rua || !address.cidade || !address.estado || address.numero === undefined){
      return "⚠️ Endereço inexistente ou inválido! ⚠️"
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`
  }

}
