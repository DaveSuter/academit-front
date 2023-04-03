import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { validarEspacios } from 'src/app/validadores/espacios.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsuarioService]
})
export class RegisterComponent implements OnInit {
  usuario:Usuario = new Usuario();
  formGroup:FormGroup;

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

  ngOnInit(): void {
  }
  
  enviarFormulario() {
    console.log(this.formGroup)
    this.usuario.email = this.formGroup.value.email;
    this.usuario.password = this.formGroup.value.password;
    this.service.register(this.usuario)
      .subscribe(
        response => {
          console.log(response);
          this.formGroup.reset();
        },
        error => {
          console.log(error);
        }
      )
    
  }

}
