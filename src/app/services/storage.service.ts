import { Injectable } from '@angular/core';
import { Transaction } from 'interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
private storageKey = 'myBudgetTransactions';

  constructor() {}

  getTransactions(): Transaction[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveTransactions(transactions: Transaction[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(transactions));
  }

  addTransaction(transaction: Transaction) {
    const data = this.getTransactions();
    data.push(transaction);
    this.saveTransactions(data);
  }
  updateTransaction(updated: Transaction) {
  const all = this.getTransactions();
  const index = all.findIndex(t => t.id === updated.id);
  if (index > -1) {
    all[index] = updated;
    localStorage.setItem('transactions', JSON.stringify(all));
  }
}


  deleteTransaction(id: number) {
    const data = this.getTransactions().filter(t => t.id !== id);
    this.saveTransactions(data);
  }

  clearAll() {
    localStorage.removeItem(this.storageKey);
  }
}
