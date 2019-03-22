import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { CountryList } from './country-list';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './create-popup.html'
})
export class NgbdModalContent {
  @Input() name;
  @Input() info;
  constructor(public activeModal: NgbActiveModal) { }
}




@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  fields: FormGroup;

  today: number = Date.now();

  submitted = false;

  countries: CountryList[];



  constructor(private formBuilder: FormBuilder, private userServiceService: UserServiceService, private router: Router, private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "Hi " + this.fields.get("customerName").value;
    modalRef.componentInstance.info = "Your details has been saved successfully";
  }

  ngOnInit() {
    this.fields = this.formBuilder.group({
      customerCountry: new FormControl(''),
      customerEmail: ['', [Validators.required, Validators.email]],
      customerName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      customerPinCode: ['', [Validators.required, Validators.minLength(6)]],
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
  get f() { return this.fields.controls; }

  onSubmit() {
    console.log(this.fields.get("registrationDate").value)


    this.submitted = true;

    if (this.fields.invalid) {
      return;
    }
    this.userServiceService.createUser(this.fields.value).subscribe(data => {
      console.log("done");
      console.log(this.fields.value.registrationDate + "there?");
    })
    this.open();
    this.router.navigate(['/home']);
  }
}


