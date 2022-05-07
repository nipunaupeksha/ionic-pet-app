import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetSearchPageRoutingModule } from './pet-search-routing.module';

import { PetSearchPage } from './pet-search.page';
import { PetItemComponent } from 'src/app/components/pet-item/pet-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetSearchPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PetSearchPage, PetItemComponent]
})
export class PetSearchPageModule {}
