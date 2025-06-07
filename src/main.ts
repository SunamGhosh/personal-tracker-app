import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, Routes } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';


import { AppComponent } from './app/app.component';
import { LlayoutComponent } from './app/component/llayout/llayout.component';
import { HomePage } from './app/home/home.page';
import { TaskPage } from './app/task/task.page';
import { FinancePage } from './app/finance/finance.page';

const routes: Routes =[
{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./app/login/login.page').then(m => m.LoginPage),
  },
  
  
       { path: 'home', component: HomePage },
       { path: 'task', component: TaskPage },
       { path: 'finance', component: FinancePage}



    

]
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
