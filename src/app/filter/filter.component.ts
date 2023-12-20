import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CarService } from '../car.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterdataForm: FormGroup;
  data: any;
  carData: any;
  models: any;
  state: any;
  statecode: any;
  constructor(
    private fb: FormBuilder,
    private service: CarService,
    private MatDialogRef: MatDialogRef<FilterComponent>
  ) {
    this.filterdataForm = this.fb.group({
      brand: [''],
      model: [''],
      year: [''],
      variant: [''],
      km: [''],
      features: [''],
      transmission: [''],
      bodyType: [''],
      color: [''],
      seats: [''],
      owner: [''],
      state: [''],
      stateCode: [''],
      city: [''],
      price: [''],
    });
  }
  ngOnInit() {
    this.service.getCarData().subscribe((res: any) => {
      this.data = res.data;
      this.carData = this.data[0].brandList;
      this.state = this.data[0].states;
      console.log('success', res);
    });
  }
  selectionChangecarmodels() {
    let carModelList: any = [];
    this.carData.forEach((item: any) => {
      if (item.brand == this.filterdataForm.controls['brand'].value) {
        carModelList = item.models;
      }
      this.models = carModelList;
    });
  }
  selectionChangecarstate() {
    let code: any = [];
    this.state.forEach((item: any) => {
      if (item.state == this.filterdataForm.controls['state'].value) {
        code = item.codes;
      }
      this.statecode = code;
    });
  }
  filterData() {
    this.MatDialogRef.close(this.filterdataForm.value);
  }
}
