import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Show Pets', url: 'show-pets', icon: 'eye' },
    { title: 'Add Pets', url: 'add-pet', icon: 'add-circle' },
    { title: 'Search Pets', url: 'pet-search', icon: 'search' },
  ];
  public labels = [];
  constructor() {}
}
