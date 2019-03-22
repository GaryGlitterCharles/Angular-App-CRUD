import { Component, OnInit } from '@angular/core';
import { CountryList } from '../create-user/country-list';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-print-details',
  templateUrl: './print-details.component.html',
  styleUrls: ['./print-details.component.css']
})
export class PrintDetailsComponent implements OnInit {

  country: CountryList[];

  truncate: string;

  constructor(private userServiceService: UserServiceService) { }

  ngOnInit() {
    this.userServiceService.getCustomerDetails().subscribe((data: CountryList[]) => {
      
      this.country = data;
    })

    
  }

}
