import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Transactions } from 'src/app/model/transactions';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit, AfterViewInit{
  example = [{
    "id": 4734,
    "date": "2018-07-11T22:49:24.000Z",
    "amount": -193.38,
    "fee": -3.18,
    "description": "Lorem ipsum dolor sit amet",
    "userId": 1
}]
list: Transactions[] = null;
  constructor(private transactions: TransactionsService) {
   }
  ngAfterViewInit(){
    this.transactions.getTransactions().subscribe(res =>{
      this.list=res;
    })
  }
  ngOnInit() {
  }

}
