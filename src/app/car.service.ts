import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private HttpClient: HttpClient) {}
  getCarData() {
    const url = 'http://localhost:3000/getCarsOptions';
    return this.HttpClient.get(url);
  }
  postcardata(body: any) {
    const url = 'http://localhost:3000/postCarInfo';
    return this.HttpClient.post(url, body);
  }
  postlogindata(body: any) {
    const url = 'http://localhost:3000/login';
    return this.HttpClient.post(url, body);
  }
  getCarDetails() {
    const url = 'http://localhost:3000/getCarInfo';
    return this.HttpClient.get(url);
  }
  postcreateCoupon(body: any) {
    const url = 'http://localhost:3000/createCoupon';
    return this.HttpClient.post(url, body);
  }
  getcouponDetails() {
    const url = 'http://localhost:3000/getAllCoupons';
    return this.HttpClient.get(url);
  }
  deleteCoupons(id: any) {
    const url = 'http://localhost:3000/deleteCoupons/' + id;
    return this.HttpClient.delete(url, id);
  }
  postredemCoupons(body: any) {
    const url = 'http://localhost:3000/redemCouponCode';
    return this.HttpClient.post(url, body);
  }
}
