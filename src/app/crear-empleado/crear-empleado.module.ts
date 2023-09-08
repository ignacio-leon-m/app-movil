import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleadoPageRoutingModule } from './crear-empleado-routing.module';

import { CrearEmpleadoPage } from './crear-empleado.page';
import { HeaderModule } from "../header/header.module";

@NgModule({
    declarations: [CrearEmpleadoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CrearEmpleadoPageRoutingModule,
        ReactiveFormsModule,
        HeaderModule
    ]
})
export class CrearEmpleadoPageModule {}
