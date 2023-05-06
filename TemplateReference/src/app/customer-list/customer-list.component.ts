import { Component } from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  selectedCustomer:any;
  customers:Customer[]=[
    {customerNo:1,name:'Mark',address:'',city:'London',country:'UK'},
    {customerNo:2,name:'Jamie',address:'',city:'Germany',country:'UK'},
    {customerNo:3,name:'Louis',address:'',city:'Spain',country:'UK'},
    {customerNo:4,name:'Alex',address:'',city:'Delhi',country:'India'},
    {customerNo:5,name:'Willi',address:'',city:'Mumbai',country:'India'}
  ]
}
