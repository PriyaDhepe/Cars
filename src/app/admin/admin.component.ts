import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CarService } from '../car.service';
import { ToastrService } from 'ngx-toastr';
import { CouponComponent } from '../coupon/coupon.component';
import { MatDialog } from '@angular/material/dialog';
import { RedeemComponent } from '../redeem/redeem.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  adminForm: FormGroup;
  data: any;
  carData: any;
  models: any = [];
  state: any;
  statecode: any = [];
  postCarData: any;

  constructor(
    private fb: FormBuilder,
    private service: CarService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {
    this.adminForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      variant: ['', Validators.required],
      km: ['', Validators.required],
      features: ['', Validators.required],
      transmission: ['', Validators.required],
      bodyType: ['', Validators.required],
      color: ['', Validators.required],
      seats: ['', Validators.required],
      owner: ['', Validators.required],
      state: ['', Validators.required],
      stateCode: ['', Validators.required],
      city: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.service.getCarData().subscribe(
      (res: any) => {
        this.data = res.data;
        this.carData = this.data[0].brandList;
        this.state = this.data[0].states;
        console.log('data', this.carData);
        console.log('success', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  selectionChangecarmodels() {
    let carModelList: any = [];
    this.carData.forEach((item: any) => {
      if (item.brand == this.adminForm.controls['brand'].value) {
        carModelList = item.models;
      }
      this.models = carModelList;
    });
  }
  selectionChangecarstate() {
    let code: any = [];
    this.state.forEach((item: any) => {
      if (item.state == this.adminForm.controls['state'].value) {
        code = item.codes;
      }
      this.statecode = code;
    });
  }
  addData() {
    // let obj = this.adminForm.value;    ans obj.brand      this is another way
    let body = {
      brand: this.adminForm.controls['brand'].value,
      model: this.adminForm.controls['model'].value,
      makeYear: this.adminForm.controls['year'].value,
      variant: this.adminForm.controls['variant'].value,
      kmDriven: this.adminForm.controls['km'].value,
      features: this.adminForm.controls['features'].value,
      transmission: this.adminForm.controls['transmission'].value,
      bodyType: this.adminForm.controls['bodyType'].value,
      color: this.adminForm.controls['color'].value,
      seats: this.adminForm.controls['seats'].value,
      owner: this.adminForm.controls['owner'].value,
      state: this.adminForm.controls['state'].value,
      stateCode: this.adminForm.controls['stateCode'].value,
      city: this.adminForm.controls['city'].value,
      price: this.adminForm.controls['price'].value,
    };
    this.service.postcardata(body).subscribe(
      (res: any) => {
        this.postCarData = res;
        console.log('success', res);
        this.toastr.success('added successfully');
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  createCoupon(): void {
    let dialogRef = this.dialog.open(CouponComponent, {
      height: '80%',
      width: ' 40%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('coupon was closed', result);
    });
  }
  redeemCoupon() {
    let dialogRef = this.dialog.open(RedeemComponent, {
      height: '80%',
      width: ' 60%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('coupon was closed', result);
    });
  }
}
