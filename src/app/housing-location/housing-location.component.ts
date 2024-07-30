import { Component, input } from '@angular/core';
import { IHousinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  housingLocation = input.required<IHousinglocation>();
}
