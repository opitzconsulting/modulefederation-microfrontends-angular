import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexRoute } from './pages/index.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: IndexRoute,
    pathMatch: 'full',
  },
  {
    path: 'remoteRoute',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './RemoteRoute',
      }).then((m) => m.RemotePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
