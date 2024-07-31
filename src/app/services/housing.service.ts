import { Injectable } from '@angular/core';
import { IHousinglocation } from '../housinglocation';
import { homeData } from '../models/housingData';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  housingLocationList = homeData

  getAllHousingLocations(): IHousinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): IHousinglocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
