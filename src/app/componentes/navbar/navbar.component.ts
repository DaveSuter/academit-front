import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { validarEspacios } from 'src/app/validadores/espacios.validator';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsuarioService]
})
export class NavbarComponent {
  usuario:Usuario = new Usuario();
  usuarioLogueado:Usuario;
  logueado:boolean = false;
  errorAlert:boolean = false;
  formGroup:FormGroup;
  @ViewChild('descarga') descarga: ElementRef;
  @ViewChild('vende') vende: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('alert') alerta: ElementRef;
  // loginModal = document.getElementById('exampleModal');
  // btnCloseModal = document.getElementById('btn-close-modal');
   alert = document.getElementById('alert-login');

  constructor(private formBuilder:FormBuilder, private service:UsuarioService) {
    this.formGroup = formBuilder.group({
     email : ['', Validators.compose([
       Validators.required,
       Validators.email,
       validarEspacios
     ])],
     password : ['', Validators.compose([
      Validators.required
    ])]
    });
  }

  ngOnInit(): void{
    this.logueado = false;
  }

  enviarFormulario() {
    console.log(this.formGroup)
    this.usuario.email = this.formGroup.value.email;
    this.usuario.password = this.formGroup.value.password;
    this.service.login(this.usuario)
      .subscribe(
        response => {
          console.log(response);
          this.usuarioLogueado = this.usuario;
          this.logueado = true;
          this.descarga.nativeElement.classList.remove('deshabilitado');
          this.vende.nativeElement.classList.remove('deshabilitado');
          //this.modal.nativeElement.hide();
          this.errorAlert = false;
          console.log("RESPONSEEEEE");
        },
        error => {
          console.log(error);
          //this.alerta.nativeElement.style.display.block;
          this.errorAlert = true;
          this.usuarioLogueado = null;
          console.log("errorrrrrrrrrrr");
        })
  }
  
  logout(){
    this.usuarioLogueado = null;
    this.descarga.nativeElement.classList.add('deshabilitado');
    this.vende.nativeElement.classList.add('deshabilitado');
  }

  mostrarAlerta(){
    this.alert.style.display = 'block';
  }

}
