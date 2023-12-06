import { NgModule } from '@angular/core';
import RemotePageComponent from './remote-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemotePageComponent,
      },
    ]),
  ],
  declarations: [RemotePageComponent],
})
export class RemotePageModule {}

export default RemotePageModule;
