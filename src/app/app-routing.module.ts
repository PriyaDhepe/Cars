import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { CouponComponent } from './coupon/coupon.component';
import { ShowAllCouponsComponent } from './show-all-coupons/show-all-coupons.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'sort',
    component: SortComponent,
  },
  {
    path: 'dashboard',
    component: DashBoardComponent,
  },
  {
    path: 'coupon',
    component: CouponComponent,
  },
  {
    path: 'showcoupon',
    component: ShowAllCouponsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
