import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexRoute } from './pages/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexRoute,
    pathMatch: 'full',
  },
  {
    path: 'remoteRoute',
    // @ts-ignore
    component: () => import('angular-remote/RemoteRoute'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
