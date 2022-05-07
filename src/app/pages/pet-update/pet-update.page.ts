import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/Pet';
import { PetServiceService } from 'src/app/services/pet-service.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.page.html',
  styleUrls: ['./pet-update.page.scss'],
})
export class PetUpdatePage implements OnInit {
  pet: any;
  private form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private petService: PetServiceService,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.pet = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.pet.name, [Validators.required]],
      species: [this.pet.species, [Validators.required]],
      sex: [this.pet.sex, [Validators.required]],
      age: [this.pet.age, [Validators.required]],
      phone: [this.pet.owner, [Validators.required]],
    });
    this.form.get('species').setValue(this.pet.species);
    this.form.get('sex').setValue(this.pet.sex);
  }

  onSubmit() {
    const changedPet: Pet = {
      id: this.pet.id,
      name: this.form.value.name,
      species: this.form.value.species,
      sex: this.form.value.sex,
      age: this.form.value.age,
      owner: this.form.value.phone,
    };

    this.petService
      .updatePet(changedPet)
      .subscribe(() => console.log('Pet changed'));

    setTimeout(() => {
      this.router.navigate(['show-pets']);
    }, 10);
  }
}
