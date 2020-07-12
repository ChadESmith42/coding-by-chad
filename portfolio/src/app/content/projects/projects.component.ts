import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsData } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = ProjectsData;
  constructor() { }

  ngOnInit(): void {
  }

}
