import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Pet } from 'src/app/Pet';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss'],
})
export class PetItemComponent implements OnInit {
  @Input() pet: Pet;
  @Input() icon: string;
  @Input() colorInput: string;
  @Output() onDeletePet: EventEmitter<Pet> = new EventEmitter();

  constructor(private router:Router) {}

  ngOnInit() {}

  onDelete(pet) {
    this.onDeletePet.emit(pet);
  }

  onUpdate(pet:Pet){
    const navigationExtras:NavigationExtras={
      queryParams: {
        special: JSON.stringify(pet)
      }
    }
    this.router.navigate(['pet-update'],navigationExtras)
  }

}
