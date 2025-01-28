import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    
    //Validação do Status
    if(status === null || status === undefined){
      return "⚠️ Status inexistente ou inválido! ⚠️"
    } 

    if(status === true){
      return "Ativo"
    } else {
      return "Inativo"
    }
  }

}
