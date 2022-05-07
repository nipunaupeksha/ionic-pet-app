import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Pet';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private apiUrl:string = 'http://localhost:3000/pets';

  constructor(private http: HttpClient) { }

  getPets():Observable<Pet[]>{
    return this.http.get<Pet[]>(this.apiUrl);
  }

  deletePet(pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${pet.id}`;
    return this.http.delete<Pet>(url);
  }

  updatePet(pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${pet.id}`;
    return this.http.put<Pet>(url, pet, httpOptions);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet, httpOptions);
  }
}
