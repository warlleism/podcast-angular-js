import { Component } from '@angular/core';
import { Podcasts } from '../../data/podcasts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  podcasts = Podcasts

  constructor() {}

  setDetail(type: string) {
    localStorage.setItem('type', type);
  }
}
