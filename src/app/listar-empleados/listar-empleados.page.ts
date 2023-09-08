import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';


interface Empleado {
  nombre: string;
  edad: number;
  cargo: string;
}

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.page.html',
  styleUrls: ['./listar-empleados.page.scss'],
})
export class ListarEmpleadosPage implements OnInit {

  empleados : Empleado[] = [
    {
      nombre: 'Juan',
      edad: 25,
      cargo: 'Ingeniero'
    },
    {
      nombre: 'Maria',
      edad: 30,
      cargo: 'Contadora'
    },
    {
      nombre: 'Luis',
      edad: 40,
      cargo: 'Administrador'
    }
  ]

  constructor(private router: Router, private stateService: StateService) {

  }

  ngOnInit() {
  }


  irACrearEmpleado(){
    this.stateService.setTitulo = 'Crear Empleados';
    this.router.navigate(['./crear-empleado']);
  }
}
