import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Show } from 'src/app/modelos/show';
import { ShowsService } from 'src/app/servicios/shows.service';


@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css'],
  providers: [ShowsService]
})
export class SellersComponent {
  generos: Array<any> = traerGeneros();
  recintos: Array<any> = traerRecintos();



  show: Show = new Show();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ShowsService) {
    this.formGroup = formBuilder.group({
      nombre: ['', Validators.compose([
        Validators.required
      ])],
      descripcion: ['', Validators.compose([
        Validators.required
      ])],
      fecha: ['', Validators.compose([
        Validators.required
      ])],
      imgCard: ['', Validators.compose([
        Validators.required
      ])],
      imgBaner: ['']
    });
  }

  crearShow() {
    console.log(this.formGroup)
    this.show.nombre = this.formGroup.value.titulo;
    this.show.descripcion = this.formGroup.value.descripcion;
    this.show.fecha = this.formGroup.value.fecha;
    this.show.imgCard = this.formGroup.value.imgcard;
    this.show.imgBaner = this.formGroup.value.imgbaner;
    this.service.create(this.show)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        })
  }

}

function traerGeneros(): any {
  let generos: any = [
    { id: '1', nombre: 'Recital' },
    { id: '2', nombre: 'Obra de teatro' },
    { id: '3', nombre: 'Fiesta' },
    { id: '4', nombre: 'Exposición' }
  ];
  return generos;
}

function traerRecintos(): any[] {
  let recintos: any = [
    { id: '1', nombre: 'Konex', direccion: 'asd 123', ciudad: 'CABA', provincia: 'Bs As' },
    { id: '2', nombre: 'Strummer', direccion: 'dsa 1234', ciudad: 'CABA', provincia: 'Bs As' },
    { id: '2', nombre: 'Tio Bizarro', direccion: 'Pellegrini 123', ciudad: 'Burzaco', provincia: 'Bs As' }
  ];
  return recintos;
}

