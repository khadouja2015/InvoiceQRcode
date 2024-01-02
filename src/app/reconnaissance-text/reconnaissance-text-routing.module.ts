import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconnaissanceTextPage } from './reconnaissance-text.page';

const routes: Routes = [
  {
    path: '',
    component: ReconnaissanceTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconnaissanceTextPageRoutingModule {}
