import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.page.html',
  styleUrls: ['./crear-empleado.page.scss'],
})
export class CrearEmpleadoPage implements OnInit {

  formularioCrearEmpleado: FormGroup; //declarar el formulario reactivo

  constructor(private fb: FormBuilder, private router: Router, private stateService: StateService) {
    //construir el formulario reactivo
    this.formularioCrearEmpleado = this.fb.group({
      nombre: [""],
      edad: [0],
      cargo: [""]
    });
  }

  ngOnInit() {
  }

  irAListarEmpleados() {
    this.stateService.setTitulo = 'Listar Empleados';
    this.router.navigate(['./listar-empleados']);
  }

  guardarEmpleado(){
    const empleado = {
      nombre: this.formularioCrearEmpleado.get('nombre')?.value,
      edad: this.formularioCrearEmpleado.get('edad')?.value,
      cargo: this.formularioCrearEmpleado.get('cargo')?.value
    };



    if(empleado.edad >= 18) {
      console.log(empleado);
      return;
    }
    console.log('No se puede guardar el empleado, porque es menor de edad')
  }

}
