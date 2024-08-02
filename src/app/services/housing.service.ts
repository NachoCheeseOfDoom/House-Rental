import { Injectable } from '@angular/core';
import { IHousinglocation } from '../housinglocation';
import { homeData } from '../models/housingData';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  housingLocationList = homeData
  // url="http://localhost:3000/locations"

  getAllHousingLocations(): IHousinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): IHousinglocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

  //! This is if you want to retrieve the api from a server or a url:
  // async getAllHousingLocations(): Promise<IHousinglocation[]> {
  //   const data = await fetch(this.url)
  //   return await data.json() ?? [];
  // }

  // async getHousingLocationById(id: number): Promise <IHousinglocation | undefined> {
  //   const data = await fetch(`${this.url}/${id}`)
  //   return await data.json() ?? {}; 
  // }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
