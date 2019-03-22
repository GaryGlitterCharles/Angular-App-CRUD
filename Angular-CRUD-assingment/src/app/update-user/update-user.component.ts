import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { CountryList } from '../create-user/country-list';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './update-popup.html'
})
export class NgbdModalContent1 {
  @Input() name;
  @Input() info;
  constructor(public activeModal: NgbActiveModal) { }
}



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userServiceService: UserServiceService, private modalService: NgbModal, private router: Router) { }
  update: FormGroup;
  des: CountryList[];
  fieldsUpdate: FormGroup;
  today: number = Date.now();
  countries: CountryList[];
  submitted = false;

  open() {
    const modalRef = this.modalService.open(NgbdModalContent1);
    modalRef.componentInstance.name = "Hi " + this.fieldsUpdate.get("customerName").value;
    modalRef.componentInstance.info = "Your details has been updated successfully";
  }

  ngOnInit() {
    this.update = this.formBuilder.group({
      customerID: ["", Validators.required]
    })
    this.fieldsUpdate = this.formBuilder.group({
      customerCountry: new FormControl(''),
      customerEmail: ['', [Validators.required, Validators.email]],
      customerName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      customerPinCode: ['', [Validators.required, Validators.minLength(6)]],
      customerID: [''],
      customerCode: [''],
      gender: [''],
      customerAddress: [''],
      contactNumber: [''],
      registrationDate: ['']
    })
    this.userServiceService.getCountryes().subscribe((data: CountryList[]) => {
      this.countries = data
    }
    )

  }
  get f() { return this.fieldsUpdate.controls; }
  onSubmit() {
    console.log(this.update.get("customerID").value);
    this.gsetByID()


  }
  onSubmitUpdate() {
    this.submitted = true;

    if (this.fieldsUpdate.invalid) {
      return;
    }
    this.userServiceService.updateUser(this.fieldsUpdate.value, this.update.get("customerID").value).subscribe(data => {
      console.log("done");

    })
    this.open();
    this.router.navigate(['/home']);
  }
  gsetByID() {
    this.userServiceService.getDetailsByID(this.update.get("customerID").value).subscribe((data: CountryList[]) => {
      this.des = data

    })
  }
}
