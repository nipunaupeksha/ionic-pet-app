import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPetsPage } from './show-pets.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPetsPageRoutingModule {}
