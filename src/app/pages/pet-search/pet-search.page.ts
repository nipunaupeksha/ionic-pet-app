import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/Pet';
import { PetServiceService } from 'src/app/services/pet-service.service';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.page.html',
  styleUrls: ['./pet-search.page.scss'],
})
export class PetSearchPage implements OnInit {
  searchField: string;
  pets: Pet[] = [];
  petList: Pet[] = [];
  constructor(private petService: PetServiceService) {
    this.petService.getPets().subscribe((pets) => (this.pets = pets));
  }

  ngOnInit() {}

  search(term:string) {
    this.petList = this.pets.filter(
      (x) => x.name.toLowerCase() === term.toLowerCase()
    );
  }

}
