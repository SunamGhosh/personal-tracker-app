import { Component, OnInit } from '@angular/core';
import { IonItem, IonApp } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-llayout',
  templateUrl: './llayout.component.html',
  styleUrls: ['./llayout.component.scss'],
  standalone: true,
   imports: [IonicModule, RouterModule, CommonModule],
})
export class LlayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
