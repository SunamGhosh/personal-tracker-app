import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-transaction',
    loadComponent: () => import('./add-transaction/add-transaction.page').then( m => m.AddTransactionPage)
  },
  {
    path: 'task',
    loadComponent: () => import('./task/task.page').then( m => m.TaskPage)
  },
 
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'finance',
    loadComponent: () => import('./finance/finance.page').then( m => m.FinancePage)
  },
  {
    path: 'homepage',
    loadComponent: () => import('./homepage/homepage.page').then( m => m.HomepagePage)
  },

];
