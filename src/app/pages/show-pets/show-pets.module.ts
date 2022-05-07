import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPetsPageRoutingModule } from './show-pets-routing.module';

import { ShowPetsPage } from './show-pets.page';
import { PetItemComponent } from 'src/app/components/pet-item/pet-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPetsPageRoutingModule,
  ],
  declarations: [ShowPetsPage, PetItemComponent]
})
export class ShowPetsPageModule {}
