import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HerosComponent} from "./heroes/heros.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes',component: HerosComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }