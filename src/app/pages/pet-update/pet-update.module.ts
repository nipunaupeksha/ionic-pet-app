import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetUpdatePageRoutingModule } from './pet-update-routing.module';

import { PetUpdatePage } from './pet-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PetUpdatePage]
})
export class PetUpdatePageModule {}
