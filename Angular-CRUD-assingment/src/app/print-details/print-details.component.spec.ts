import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDetailsComponent } from './print-details.component';

describe('PrintDetailsComponent', () => {
  let component: PrintDetailsComponent;
  let fixture: ComponentFixture<PrintDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
