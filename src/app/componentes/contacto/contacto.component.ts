import { Component } from '@angular/core';
import { Mensaje } from 'src/app/modelos/mensaje';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  mensaje: Mensaje = new Mensaje();

  enviarForm(formularioTD:any){
    let msj:Mensaje = new Mensaje();

    msj.nombre = formularioTD.from.value['nombre'];
    msj.email = formularioTD.from.value['email'];
    msj.texto = formularioTD.from.value['texto'];
    console.log(msj.nombre + " : " + msj.email + "\nMensaje: " + msj.texto);
    
  }

}
