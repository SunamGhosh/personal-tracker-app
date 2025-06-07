import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { NavController } from '@ionic/angular';
import { Transaction } from 'interface';
import {IonicModule} from '@ionic/angular'
@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddTransactionPage implements OnInit {

  ngOnInit(): void {
      
  }
  transaction: Transaction = {
    id: Date.now(),
    type: 'expense',
    category: '',
    amount: 0,
    date: new Date().toISOString(),
  };

  constructor(
    private storage: StorageService,
    private navCtrl: NavController
  ) {}

  save() {
    this.transaction.id = Date.now();
    this.storage.addTransaction(this.transaction);
    this.navCtrl.navigateBack('/home');
  }
}

