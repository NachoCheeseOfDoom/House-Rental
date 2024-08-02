import { IHousinglocation } from './../housinglocation';
import { Component, inject, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
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
  filteredLocationList: IHousinglocation[] = []

  ngOnInit(): void {
    this.housingLocationList = this._housingService.getAllHousingLocations();
    this.filteredLocationList = this._housingService.getAllHousingLocations();
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(housingLocation =>
      housingLocation.name.toLowerCase().includes(text.toLowerCase()) ||
      housingLocation.city.toLowerCase().includes(text.toLowerCase()) ||
      housingLocation.state.toLowerCase().includes(text.toLowerCase())
    )

    //! This is if you want to retrieve the api from a server or a url:
    // ngOnInit(): void {
    //   this._housingService.getAllHousingLocations().then((houseList: IHousinglocation[]) => {
    //     this.housingLocationList = houseList
    //     this.filteredLocationList = houseList
    //   }) 
    // }

  }


}
