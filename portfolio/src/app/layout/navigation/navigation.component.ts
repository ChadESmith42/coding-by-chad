import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  links = [
    { title: 'Projects', fragment: 'projects' },
    { title: 'Resume', fragment: 'resume' },
    { title: 'Social Media', fragment: 'social-media' },
    { title: 'Contact', fragment: 'contact' }
  ];
  isMenuCollapsed = true;

  constructor(public route: ActivatedRoute) { }

}
