import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { Transaction } from 'interface';
import {IonicModule} from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule,RouterModule,FormsModule],
})
export class HomePage {
  ngOnInit(): void {
      this.username = localStorage.getItem('username') || 'User';
  }
 constructor(
      private router: Router,
   
  ) {}
  

  username = '';
   goTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}