import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetUpdatePage } from './pet-update.page';

const routes: Routes = [
  {
    path: '',
    component: PetUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetUpdatePageRoutingModule {}
