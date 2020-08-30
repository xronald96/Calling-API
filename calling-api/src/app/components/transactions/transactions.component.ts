import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Transactions } from 'src/app/model/transactions';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit, AfterViewInit{
orderBy="";
text="";
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

  filterBy(value?){
    this.transactions.getTransactions(this.orderBy, this.orderBy==='description'? this.text: value).subscribe(res =>{
      this.list=res;
    })
  }
}
