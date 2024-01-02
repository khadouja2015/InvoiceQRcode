import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostQRPage } from './post-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PostQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostQRPageRoutingModule {}
