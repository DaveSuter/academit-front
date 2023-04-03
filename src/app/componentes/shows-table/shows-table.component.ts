import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Show } from 'src/app/modelos/show';
import { BannerService } from 'src/app/servicios/banner.service';
import { ShowsService } from 'src/app/servicios/shows.service';

@Component({
  selector: 'app-shows-table',
  templateUrl: './shows-table.component.html',
  styleUrls: ['./shows-table.component.css'],
  providers: [BannerService]
})
export class ShowsTableComponent {
  arrayShows:Array<Show>;
  showEditar:Show;
  showE:Show = new Show();
  formGroup: FormGroup;

  //los array de los select
  generos: Array<any> = traerGeneros();
  recintos: Array<any> = traerRecintos();

  constructor(private service:ShowsService){}

  ngOnInit(): void {
    this.service
    .getAll()
    .subscribe(response => this.arrayShows = response,
      (err) => {
        console.log(err)
      })
  }

  pasarDatos(show:Show):any{
    console.log(show);
    this.showEditar = show;
  }

  editarShow(){
    console.log(this.formGroup);
    this.showE.nombre = this.formGroup.value.titulo;
    this.showE.descripcion = this.formGroup.value.descripcion;
    this.showE.fecha = this.formGroup.value.fecha;
    this.showE.imgCard = this.formGroup.value.imgcard;
    this.showE.imgBaner = this.formGroup.value.imgbaner;
    this.service.update(this.showE)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  borrarShow(){
    console.log(this.formGroup);
    this.showE.idshow = this.formGroup.value.id;
    this.service.delete(this.showE)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
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

