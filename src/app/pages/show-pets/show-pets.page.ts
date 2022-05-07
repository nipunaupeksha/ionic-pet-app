import { Component, OnInit } from '@angular/core';
import { Pet } from '../../Pet';
import { PetServiceService } from 'src/app/services/pet-service.service';

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.page.html',
  styleUrls: ['./show-pets.page.scss'],
})
export class ShowPetsPage implements OnInit {

  private pets: Pet[] = [];
 
  constructor(private petService: PetServiceService) { }

  ngOnInit() {
    this.petService.getPets().subscribe((pets)=>(this.pets=pets));
  }

  deletePet(pet:Pet){
    this.petService.deletePet(pet).subscribe(
      () => (this.pets = this.pets.filter((t) => t.id !== pet.id))
    );
  }
}
