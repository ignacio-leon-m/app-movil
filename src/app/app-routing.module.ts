import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listar-empleados',
    pathMatch: 'full'
  },
  {
    path: 'listar-empleados',
    loadChildren: () => import('./listar-empleados/listar-empleados.module').then( m => m.ListarEmpleadosPageModule)
  },
  {
    path: 'crear-empleado',
    loadChildren: () => import('./crear-empleado/crear-empleado.module').then( m => m.CrearEmpleadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
