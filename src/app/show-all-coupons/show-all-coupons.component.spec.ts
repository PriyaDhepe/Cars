import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCouponsComponent } from './show-all-coupons.component';

describe('ShowAllCouponsComponent', () => {
  let component: ShowAllCouponsComponent;
  let fixture: ComponentFixture<ShowAllCouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllCouponsComponent]
    });
    fixture = TestBed.createComponent(ShowAllCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
