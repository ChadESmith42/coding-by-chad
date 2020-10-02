import { Component, OnInit } from '@angular/core';
import { ContentCard } from 'src/app/card-container/content-card/content-card.model';
import { resume } from './resume-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public skills: ContentCard[];
  public work: ContentCard[];
  public education: ContentCard[];
  public organizations: ContentCard[];
  constructor() { }

  ngOnInit(): void {
    this.skills = resume.skills;
    this.work = resume.work;
    this.education = resume.education;
    this.organizations = resume.organizations;
  }

}
