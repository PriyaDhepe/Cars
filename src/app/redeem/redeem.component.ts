import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss'],
})
export class RedeemComponent {
  redeemForm: FormGroup;
  postCouponCode: any;
  coupondata: any;
  constructor(private service: CarService, private fb: FormBuilder) {
    this.redeemForm = this.fb.group({
      couponCode: ['', Validators.required],
      discount: [''],
    });
  }
  ngOnInit() {}

  submit() {
    let obj = {
      couponCode: this.redeemForm.controls['couponCode'].value,
    };
    this.service.postredemCoupons(obj).subscribe((res: any) => {
      if ((res.data.message = 'Coupon Redem successfully')) {
        this.redeemForm.get('discount')?.patchValue(res.data.discount);
        console.log(res);
      }
    });
  }
}
