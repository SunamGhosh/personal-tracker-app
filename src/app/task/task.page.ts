import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
  ChartType
} from 'chart.js';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TaskPage implements OnInit, AfterViewInit {
  newTask = '';
  tasks: { title: string; done: boolean }[] = [];

  pieChart: Chart | undefined;

  pieChartLabels = ['Done', 'Pending'];
  pieChartData: number[] = [0, 0];

  constructor() {
    // Register all necessary Chart.js components
    Chart.register(PieController, ArcElement, Tooltip, Legend);
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = (document.getElementById('pieChart') as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    this.updateChartData();

    this.pieChart = new Chart(ctx, {
      type: 'pie' as ChartType,
      data: {
        labels: this.pieChartLabels,
        datasets: [
          {
            data: this.pieChartData,
            backgroundColor: ['#36A2EB', '#FF6384'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  updateChartData() {
    this.pieChartData = [this.getDoneCount(), this.getPendingCount()];
    if (this.pieChart) {
      this.pieChart.data.datasets[0].data = this.pieChartData;
      this.pieChart.update();
    }
  }

  addTask() {
    const trimmedTask = this.newTask.trim();
    if (trimmedTask) {
      this.tasks.push({ title: trimmedTask, done: false });
      this.newTask = '';
      this.saveTasks();
      this.updateChartData();
    }
  }

  deleteTask(task: { title: string; done: boolean }) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
    this.updateChartData();
  }

  updateTask(task: { title: string; done: boolean }) {
    this.saveTasks();
    this.updateChartData();
  }

  saveTasks() {
    localStorage.setItem('dailyTasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const saved = localStorage.getItem('dailyTasks');
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  }

  getDoneCount(): number {
    return this.tasks.filter(t => t.done).length;
  }

  getPendingCount(): number {
    return this.tasks.filter(t => !t.done).length;
  }

  getTotalCount(): number {
    return this.tasks.length;
  }
}
