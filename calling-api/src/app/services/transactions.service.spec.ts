import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[FormsModule, ReactiveFormsModule,RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: TransactionsService = TestBed.get(TransactionsService);
    expect(service).toBeTruthy();
  });
});
