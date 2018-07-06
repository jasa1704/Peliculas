import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SheredModule } from '../shered/shered.module';

@NgModule({
  imports: [
    CommonModule,
    SheredModule
  ],
  declarations: [LoginComponent, DashboardComponent, NotFoundComponent]
})
export class CoreModule { }
