import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CountryList } from './create-user/country-list';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  urlForCountries = "http://localhost:4000/countries";

  url = "http://localhost:3000/details";

  // url = "http://localhost:8060/";



  sharedCompnent: number;


  getCountries2(country_code: string) {
    return this.http.get("https://www.countryflags.io/" + country_code + "/flat/:size.png")
  }

  getCountryes() {
    return this.http.get(this.urlForCountries)
  }

  getCustomerDetails() {
    return this.http.get(this.url);
  }

  updateUser(countryList: CountryList, id) {
    return this.http.put(this.url + '/' + id, countryList);
  }
  deleteDetails(id) {
    return this.http.delete(this.url + '/' + id);
  }

  createUser(countryList: CountryList) {
    return this.http.post(this.url, countryList)
  }
  getDetailsByID(id) {
    return this.http.get(this.url + '/' + id);
  }


}
