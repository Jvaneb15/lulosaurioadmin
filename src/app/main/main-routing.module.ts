
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import( './dashboard/dashboard.module' ).then(m => m.DashboardModule)
      },
      {
        path: 'parametros',
        loadChildren: () => import( './parametros/parametros.module').then( m => m.ParametrosModule )
      },
      {
        path: 'cuentos',
        loadChildren: () => import( './cuentos/cuentos.module').then( m => m.CuentosModule )
      },
      {
        path: 'suscriptores',
        loadChildren: () => import( './suscriptores/suscriptores.module').then( m => m.SuscriptoresModule )
      },
      {
        path: 'notificaciones',
        loadChildren: () => import( './notificaciones/notificacion-push.module').then( m => m.NotificacionPushModule )
      },
      {
        path: 'perfil',
        loadChildren: () => import( './perfil/perfil.module').then( m => m.PerfilModule )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
