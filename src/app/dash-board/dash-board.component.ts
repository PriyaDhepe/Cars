import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { discountConstant, variableConstant } from '../carvariable';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent {
  filterdata: any;
  searchCar: any;
  allCarDetails: any;
  searchalldata: any;
  allCarDetails2: any;
  wishList: any = [];
  currentitem: any = [];
  // inWishList = false;
  addToCartItem: any = [];
  bookedCar: any = [];
  constructor(
    private service: CarService,
    private Dialog: MatDialog,
    private toastr: ToastrService,
    private date: DatePipe
  ) {
    const data = localStorage.getItem('wish');
    if (data) {
      this.wishList = JSON.parse(data);
    }
    // const data1 = localStorage.getItem('booked');
    // if (data1) {
    //   this.bookedCar = JSON.parse(data1);
    // }

    // const data1 = localStorage.getItem('cars');
    // if (data1) {
    //   this.allCarDetails = JSON.parse(data1);
    // }
  }
  ngOnInit() {
    const data1 = localStorage.getItem('cars');
    if (data1) {
      this.allCarDetails = JSON.parse(data1);
    }
    const data2 = localStorage.getItem('wishlistall');
    if (data2) {
      this.allCarDetails = JSON.parse(data2);
    }
    this.allCarDiscountPrice();
    this.discount();
    // this.service.getCarDetails().subscribe(
    //   (res: any) => {
    //     this.allCarDetails = res.data;
    //     this.allCarDetails2 = res.data;
    //     this.filterdata = this.allCarDetails;

    //     console.log('success', res);
    //   },
    //   (error) => {
    //     console.log('error', error);
    //   }
    // );
  }
  allCarDiscountPrice() {
    this.allCarDetails.forEach((item: any) => {
      if (item.brand == variableConstant.MarutiSuzuki) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstant.Chevrolet) {
        item.discountPrice = item.price - item.price * 0.2;
      } else if (item.brand == variableConstant.Fiat) {
        item.discountPrice = item.price - item.price * 0.15;
      } else if (item.brand == variableConstant.Ford) {
        item.discountPrice = item.price - item.price * 0.12;
      } else if (item.brand == variableConstant.Honda) {
        item.discountPrice = item.price - item.price * 0.13;
      } else if (item.brand == variableConstant.Hyundai) {
        item.discountPrice = item.price - item.price * 0.14;
      } else if (item.brand == variableConstant.Kia) {
        item.discountPrice = item.price - item.price * 0.11;
      } else if (item.brand == variableConstant.Mahindra) {
        item.discountPrice = item.price - item.price * 0.16;
      } else if (item.brand == variableConstant.Renault) {
        item.discountPrice = item.price - item.price * 0.17;
      } else if (item.brand == variableConstant.Tata) {
        item.discountPrice = item.price - item.price * 0.13;
      } else if (item.brand == variableConstant.Toyota) {
        item.discountPrice = item.price - item.price * 0.18;
      } else if (item.brand == variableConstant.Volkswagen) {
        item.discountPrice = item.price - item.price * 0.2;
      }
    });
  }
  discount() {
    this.allCarDetails.forEach((item: any) => {
      if (item.brand == variableConstant.MarutiSuzuki) {
        item.discount = discountConstant.MarutiSuzuki;
      }
    });
  }

  filterData() {
    let dialogRef = this.Dialog.open(FilterComponent, {
      height: '70%',
      width: '80%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('dialog was closed', result);
      this.filterAllData(result);
    });
  }
  filterAllData(result: any) {
    this.allCarDetails = this.filterdata;
    if (result.brand) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.brand == result.brand;
      });
    }
    if (result.model) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.model == result.model;
      });
    }
    if (result.makeYear) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.makeYear == result.makeYear;
      });
    }
    if (result.variant) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.variant == result.variant;
      });
    }
    if (result.kmDriven) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.kmDriven == result.kmDriven;
      });
    }

    if (result.transmission) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.transmission == result.transmission;
      });
    }
    if (result.bodyType) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.bodyType == result.bodyType;
      });
    }
    if (result.color) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.color == result.color;
      });
    }
    if (result.seats) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.seats == result.seats;
      });
    }
    if (result.owner) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.owner == result.owner;
      });
    }
    if (result.state) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.state == result.state;
      });
    }
    if (result.stateCode) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.stateCode == result.stateCode;
      });
    }
    if (result.city) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.city == result.city;
      });
    }
    if (result.price) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        return item.price == result.price;
      });
    }
    if (result.features) {
      this.allCarDetails = this.allCarDetails.filter((item: any) => {
        let count = 0;
        if (result.features.length > 0) {
          result.features.forEach((element: any) => {
            if (item.features.indexOf(element) >= 0) {
              count = count + 1;
            }
          });
        }
        if (count == result.features.length) {
          return item;
        }
      });
    }
  }

  resetData() {
    this.allCarDetails = this.filterdata;
  }

  searchData() {
    let searchcardata: any = [];
    this.allCarDetails = this.allCarDetails.filter((item: any) => {
      if (
        item.brand.toLowerCase().includes(this.searchCar.toLowerCase()) ||
        item.model.toLowerCase().includes(this.searchCar.toLowerCase())
      ) {
        return (searchcardata = item.brand || item.model);
      }
      this.searchalldata = searchcardata;
    });
  }
  reset() {
    this.allCarDetails = this.allCarDetails2;
  }

  sortData() {}

  addToCart(currentAddCar: any) {
    let obj = {
      ...currentAddCar,
      quantity: 1,
      totalPrice: currentAddCar.price,
    };
    if (this.addToCartItem.length > 0) {
      let itemExist = false;
      this.addToCartItem.forEach((item: any) => {
        if (currentAddCar.model == item.model) {
          itemExist = true;
        }
        if (itemExist) {
          item.quantity += 1;
          item.totalPrice += item.price;
          this.toastr.success('added successfully');
        } else {
          item.quantity = 1;
          item.totalPrice = item.price;
          this.addToCartItem.push(obj);
          this.toastr.success('added successfully');
        }
      });
    } else {
      this.addToCartItem.push(obj);
      this.toastr.success('added successfully');
    }
    console.log('llll', this.addToCartItem);
    localStorage.setItem('addedInCart', JSON.stringify(this.addToCartItem));
  }

  bookCar(currenBooktCar: any) {
    let obj = {
      ...currenBooktCar,
      dateTime: this.date.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };

    this.bookedCar.push(obj);

    if (this.bookedCar.length > 0) {
      let itemExist = false;
      this.bookedCar.forEach((item: any) => {
        if (currenBooktCar.model == item.model && item.bookCar == true) {
          itemExist = true;
        }
      });
      if (itemExist) {
        this.toastr.warning('already Booked ');
      } else {
        currenBooktCar.bookCar = true;
        this.bookedCar.push(currenBooktCar);
      }
    } else {
      currenBooktCar.bookCar = true;
      this.bookedCar.push(currenBooktCar);
    }

    localStorage.setItem('booked', JSON.stringify(this.bookedCar));
    localStorage.setItem('cars', JSON.stringify(this.allCarDetails));

    console.log('priya', this.allCarDetails);
  }

  isInWishlist(currentWishitem: any) {
    if (this.wishList.length > 0) {
      let itemExist = false;
      this.wishList.forEach((element: any) => {
        if (currentWishitem.model == element.model && element.Wish == true) {
          itemExist = true;
        }
      });
      if (itemExist) {
        this.toastr.warning('already in wishlist ');
      } else {
        currentWishitem.Wish = true;
        this.wishList.push(currentWishitem);
      }
    } else {
      currentWishitem.Wish = true;
      this.wishList.push(currentWishitem);
    }
    localStorage.setItem('wish', JSON.stringify(this.wishList));
    localStorage.setItem('wishlistall', JSON.stringify(this.allCarDetails));

    console.log('pppppp', this.allCarDetails);
  }
}

// addToCart(currentAddCar: any) {
//   let obj = {
//     ...currentAddCar,
//     quantity: 0,
//     totalPrice: 0,
//   };
//   this.addToCartItem.push(obj);

//   if (this.addToCartItem.length > 0) {
//     let itemExist = false;
//     this.addToCartItem.forEach((item: any) => {
//       if (currentAddCar.model == item.model) {
//         itemExist = true;
//       }
//       if (itemExist) {
//         item.quantity += 1;
//         item.totalPrice += item.price;
//       } else {
//         item.quantity = 1;
//         item.totalPrice = item.price;
//       }
//     });
//   } else {
//     this.addToCartItem.push(currentAddCar);
//   }
//   console.log('llll', this.addToCartItem);
// }
