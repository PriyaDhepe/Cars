import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show-all-coupons',
  templateUrl: './show-all-coupons.component.html',
  styleUrls: ['./show-all-coupons.component.scss'],
})
export class ShowAllCouponsComponent {
  couponData: any;
  deletedcoupon: any;
  allCoupon: any = [];
  couponId: any = [];
  constructor(
    private service: CarService,
    private matdialogref: MatDialogRef<ShowAllCouponsComponent>
  ) {}
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
  removeCoupon(id: any) {
    let id1: any;

    this.service.deleteCoupons(id).subscribe((res: any) => {
      if ((res.message = 'Coupon Deeleted successfull')) {
        this.getAllCoupons();
      }
    });
  }
}
