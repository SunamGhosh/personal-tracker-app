import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Transaction } from 'interface';
import { StorageService } from '../services/storage.service';
import {IonicModule} from '@ionic/angular'
import Chart from 'chart.js/auto';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinancePage implements OnInit {
  ngOnInit(): void {
      
  }
  transactions: Transaction[] = [];
  income = 0;
  expense = 0;
 showAddModal = false;
  constructor(
      private storage: StorageService,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.load();
  }

 load() {
  this.transactions = this.storage.getTransactions();
  this.income = this.transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  this.expense = this.transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  this.renderChart();
}
renderChart() {
  const canvas = document.getElementById('financeChart') as HTMLCanvasElement;

  if (canvas) {
    new Chart(canvas, {
      type: 'bar', // Changed from 'doughnut' to 'bar'
      data: {
        labels: ['Income', 'Expense'],
        datasets: [{
          label: '₹ Amount',
          data: [this.income, this.expense],
          backgroundColor: ['#2dd36f', '#eb445a'],
          borderRadius: 8,
          barPercentage: 0.5,
          categoryPercentage: 0.5
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '₹' + value;
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `₹ ${ctx.parsed.y}`
            }
          }
        }
      }
    });
  }
}

  delete(id: number) {
    this.storage.deleteTransaction(id);
    this.load();
  }


   transaction: Transaction = {
      id: Date.now(),
      type: 'expense',
      category: '',
      amount: 0,
      date: new Date().toISOString(),
    };
  
   
  
   edit(t: Transaction) {
  this.transaction = { ...t }; // clone for editing
  this.showAddModal = true;
}

save() {
  if (this.transaction.id && this.transactions.find(tr => tr.id === this.transaction.id)) {
    this.storage.updateTransaction(this.transaction);
  } else {
    this.transaction.id = Date.now();
    this.transaction.date = new Date().toISOString();
    this.storage.addTransaction(this.transaction);
  }
  window.location.reload();
}

  }


