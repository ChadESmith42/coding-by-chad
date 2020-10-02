import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ResumeComponent } from './content/resume/resume.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SocialMediaComponent } from './content/social-media/social-media.component';
import { ContactComponent } from './content/contact/contact.component';
import { ErrorModule } from './error/error.module';
import { CardContainerComponent } from './card-container/card-container.component';
import { ContentCardComponent } from './card-container/content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ResumeComponent,
    ProjectsComponent,
    SocialMediaComponent,
    ContactComponent,
    CardContainerComponent,
    ContentCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
