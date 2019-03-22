import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryList } from '../create-user/country-list';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'ngbd-modal-confirm',
  templateUrl: './details-delete-conformation.html'
})
export class NgbdModalConfirm implements OnInit {
  constructor(public modal: NgbActiveModal, private userServiceService: UserServiceService, private router: Router) {

  }



  ngOnInit() {

  }
  close() {
    this.userServiceService.deleteDetails(this.userServiceService.sharedCompnent).subscribe(data => {

      console.log("deleted");
    })
    this.modal.close();
    this.router.navigate(['/home']);
  }

}

const MODALS = {
  focusFirst: NgbdModalConfirm
};

@Component({
  selector: 'app-delete-details',
  templateUrl: './delete-details.component.html',
  styleUrls: ['./delete-details.component.css']
})
export class DeleteDetailsComponent implements OnInit {

  constructor(private userServiceService: UserServiceService, private formBuilder: FormBuilder, private _modalService: NgbModal) {

  }
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;



  delete: FormGroup;
  submitted = false;
  des: CountryList[];

  ngOnInit() {
    this.delete = this.formBuilder.group({
      customerID: ["", Validators.required]
    })

  }
  get f() { return this.delete.controls; }
  onSubmitA() {
    this.submitted = true;
    this.gsetByID();
    this.userServiceService.sharedCompnent = this.delete.get("customerID").value;
  }
  open(name: string) {

    this._modalService.open(MODALS[name]);

  }


  gsetByID() {
    this.userServiceService.getDetailsByID(this.delete.get("customerID").value).subscribe((data: CountryList[]) => {
      this.des = data

    })
  }

}
