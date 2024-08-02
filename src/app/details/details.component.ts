import { Component, OnInit, inject } from '@angular/core';
import { HousingService } from './../services/housing.service';
import { IHousinglocation } from '../housinglocation';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  private _homeService = inject(HousingService);
  private _route = inject(ActivatedRoute);

  housingLocation?: IHousinglocation;

  detailsFrom = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    const housingLocationId = Number(this._route.snapshot.params['id'])
    this.housingLocation = this._homeService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this._homeService.submitApplication(
      this.detailsFrom.value.firstName ?? '',
      this.detailsFrom.value.lastName ?? '',
      this.detailsFrom.value.email ?? '',
    ); 
  }

  //! This is if you want to retrieve the api from a server or a url:
  // ngOnInit(): void {
  //   const housingLocationId = Number(this._route.snapshot.params['id'])
  //   this._homeService.getHousingLocationById(housingLocationId).then((houseDetails) => {
  //     this.housingLocation = houseDetails;
  //   })
  // }
}
