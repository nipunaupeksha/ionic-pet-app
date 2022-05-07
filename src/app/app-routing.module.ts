import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-pet',
    loadChildren: () => import('./pages/add-pet/add-pet.module').then( m => m.AddPetPageModule)
  },
  {
    path: 'show-pets',
    loadChildren: () => import('./pages/show-pets/show-pets.module').then( m => m.ShowPetsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pet-search',
    loadChildren: () => import('./pages/pet-search/pet-search.module').then( m => m.PetSearchPageModule)
  },
  {
    path: 'pet-update',
    loadChildren: () => import('./pages/pet-update/pet-update.module').then( m => m.PetUpdatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
