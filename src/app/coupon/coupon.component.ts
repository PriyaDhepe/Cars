import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CarService } from '../car.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent {
  hideshow1 = false;
  hideshow2 = true;
  couponData: any;
  deletedcoupon: any;
  allCoupon: any = [];
  couponId: any = [];
  couponDataalll: any;
  couponForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private matdialog: MatDialog,
    private service: CarService,
    private matdialogref: MatDialogRef<CouponComponent>
  ) {
    this.couponForm = this.fb.group({
      couponCode: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getAllCoupons();
  }
  getAllCoupons() {
    this.service.getcouponDetails().subscribe(
      (res: any) => {
        this.couponData = res.data;
        console.log('success', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  submitData() {
    let body = {
      couponCode: this.couponForm.controls['couponCode'].value,
      discount: this.couponForm.controls['discount'].value,
    };
    this.service.postcreateCoupon(body).subscribe((res: any) => {
      this.couponDataalll = res;
    });
    this.matdialogref.close(this.couponForm.value);
  }
  showAllCoupon() {
    this.hideshow1 = true;
  }

  removeCoupon(id: any) {
    this.service.deleteCoupons(id).subscribe((res: any) => {
      if ((res.message = 'Coupon Deeleted successfull')) {
        this.getAllCoupons();
      }
    });
  }
  backtocontinue() {
    this.hideshow1 = false;
  }
}
