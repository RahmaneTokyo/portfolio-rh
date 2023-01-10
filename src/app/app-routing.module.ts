import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeLandingPageComponent} from "./home/home-landing-page/home-landing-page.component";
import {AboutComponent} from "./home/about/about.component";
import {ResumeComponent} from "./home/resume/resume.component";
import {WorksComponent} from "./home/works/works.component";

const routes: Routes = [
  { path: '', redirectTo: 'home/about', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeLandingPageComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'works', component: WorksComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
