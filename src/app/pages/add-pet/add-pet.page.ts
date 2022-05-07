import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from 'src/app/Pet';
import { PetServiceService } from 'src/app/services/pet-service.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  styleUrls: ['./add-pet.page.scss'],
})
export class AddPetPage implements OnInit {

  private form: FormGroup;

  pets: Pet[] = [];

  constructor(private petService: PetServiceService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:['', [Validators.required]],
      species:['', [Validators.required]],
      sex:['', [Validators.required]],
      age:['', [Validators.required]],
      phone:['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.petService.getPets().subscribe((pets) => (this.pets = pets));
  }

  onSubmit() {
    const newPet: Pet = {
      id: this.pets.sort()[this.pets.length - 1].id + 1,
      name: this.form.value.name,
      species: this.form.value.species,
      sex: this.form.value.sex,
      age: this.form.value.age,
      owner: this.form.value.phone
    };

    this.petService.addPet(newPet).subscribe((pet) => this.pets.push(pet));

    setTimeout(() => {
      this.router.navigate(['show-pets']);
    }, 10);
  }
}
