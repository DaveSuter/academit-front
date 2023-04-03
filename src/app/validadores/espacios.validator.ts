import {AbstractControl} from "@angular/forms";

export function validarEspacios(abstractControl:AbstractControl){
  if(abstractControl == null){
    return null;
  }
  if(abstractControl.value.includes(' ')){
    return { contieneEspacios : true }
  }
  return null;
}
