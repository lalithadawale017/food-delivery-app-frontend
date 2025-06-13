import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { OrderDTO } from '../modules/OrderDTO';
//import { OrderDTO } from '../models/OrderDTO';


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent  {

  orderSummary?: OrderDTO;
  obj: any;
  total?: any;
  showDialog: boolean = false;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }
  
  ngOnInit() {
   /** * const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;

   this.total = this.orderSummary?.foodItemDTOList?.reduce((accumulator, currentValue) => {
      const quantity = currentValue.quantity || 0;
      const price = currentValue.price || 0;
      return accumulator + (currentValue.quantity * price);
    }, 0);*/

    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;
    console.log('Order Summary:', this.orderSummary);  // Debug log to check the entire object
    console.log('Food Items:', this.orderSummary?.foodItemList);  // Debug log to check food items


    this.total = this.orderSummary?.foodItemList?.reduce((accumulator, currentValue) => {
      const quantity = currentValue.quantity || 0;
      const price = currentValue.price || 0;
      return accumulator + (currentValue.quantity * price);
    }, 0);
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary)
      .subscribe(
        response => {
            this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }





}
