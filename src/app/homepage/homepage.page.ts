import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import Writer from 't-writer.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class HomepagePage implements OnInit, AfterViewInit {
  /** Reference to the <h1> (or any element) where text is typed */
  @ViewChild('heroText', { static: true })
  heroText!: ElementRef<HTMLElement>;

  constructor(private router: Router) {}

  /* ------------------------------------------------------------------ */
  /*  Lifecycle hooks                                                   */
  /* ------------------------------------------------------------------ */
  ngOnInit(): void {
    /* put any standard init logic here */
  }

  ngAfterViewInit(): void {
    /* Initialise t‑writer AFTER the view is rendered */
    const writer = new Writer(this.heroText.nativeElement, {
      loop: true,
      typeColor: '#222',      // tweak colour if you like
      typeSpeed: 80,          // ms per character
      deleteSpeed: 50         // ms per character while deleting
    });

    writer
      .type('Welcome to Personal Tracker')
      .rest(1000)
      .clear()
      .type('Track Your Data')
      .rest(1000)
      .clear()
      .start();
  }

  /* ------------------------------------------------------------------ */
  /*  Data for your feature grid                                        */
  /* ------------------------------------------------------------------ */
  features = [
    { icon: 'clipboard-outline', label: 'Task Management' },
    { icon: 'calendar-outline', label: 'Finance Track' },
    { icon: 'speedometer-outline', label: 'Dashboard' },
    { icon: 'logo-whatsapp', label: 'Daily Task' },
    { icon: 'extension-puzzle-outline', label: 'Ease of integration' },
    { icon: 'document-text-outline', label: 'Graphs' },
    { icon: 'chatbubble-ellipses-outline', label: 'Instant Records' }
  ];

  /* ------------------------------------------------------------------ */
  /*  Navigation helpers                                                */
  /* ------------------------------------------------------------------ */
  goTo(path: string): void {
    this.router.navigate(['/' + path]);
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
