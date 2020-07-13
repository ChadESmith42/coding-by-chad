import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './content/resume/resume.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SocialMediaComponent } from './content/social-media/social-media.component';
import { ContactComponent } from './content/contact/contact.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
