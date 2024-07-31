import { Component, inject, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { IHousinglocation } from '../housinglocation';
import { HousingService } from '../services/housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  housingLocationList: IHousinglocation[] = [];
  private _housingService = inject(HousingService)

  ngOnInit(): void {
    this.housingLocationList = this._housingService.getAllHousingLocations();
  }

}
