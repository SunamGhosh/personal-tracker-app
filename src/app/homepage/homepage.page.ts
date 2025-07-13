import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class HomepagePage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  features = [
  { icon: 'clipboard-outline', label: 'Task Management' },
  { icon: 'calendar-outline', label: 'Finance Track' },
  { icon: 'speedometer-outline', label: 'Dashboard' },
  { icon: 'logo-whatsapp', label: 'Daily Task' },
  { icon: 'extension-puzzle-outline', label: 'Ease of integration' },
  { icon: 'document-text-outline', label: 'Graphs' },
  { icon: 'chatbubble-ellipses-outline', label: 'Instant Records' },
];


   goTo(path: string) {
    this.router.navigate(['/' + path]);
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}
